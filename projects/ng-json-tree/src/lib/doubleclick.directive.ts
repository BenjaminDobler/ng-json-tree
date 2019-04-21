import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { fromEvent } from "rxjs";
import { map, buffer, debounceTime, filter } from "rxjs/operators";

@Directive({
  selector: "[dbclick]"
})
export class DoubleClickDirective implements AfterViewInit {
  @Output()
  dbclick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const mouse$ = fromEvent(document, "click");

    const buff$ = mouse$.pipe(debounceTime(250));

    const click$ = mouse$.pipe(
      buffer(buff$),
      map(list => {
        return list.length;
      }),
      filter(x => x === 2)
    );

    click$.subscribe(() => {
      this.dbclick.emit();
    });
  }
}
