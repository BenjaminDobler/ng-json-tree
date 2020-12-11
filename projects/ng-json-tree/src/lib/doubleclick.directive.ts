import {
  Directive,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { fromEvent, merge } from "rxjs";
import { map, buffer, debounceTime, filter } from "rxjs/operators";

@Directive({
  selector: "[dbclick], [singleClick]",
})
export class DoubleClickDirective implements AfterViewInit {
  @Output()
  dbclick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  singleClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    const clickEvent = fromEvent<MouseEvent>(el, "click");
    const dblClickEvent = fromEvent<MouseEvent>(el, "dblclick");
    const eventsMerged = merge(clickEvent, dblClickEvent).pipe(
      debounceTime(200)
    );
    eventsMerged.subscribe((event) => {
      if (event.type === "click") {
        this.singleClick.emit(event);
      } else {
        this.dbclick.emit(event);
      }
    });
  }
}
