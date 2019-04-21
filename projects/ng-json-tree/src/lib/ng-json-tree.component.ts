import { Component, Input, OnInit, ViewChildren, QueryList } from "@angular/core";

@Component({
  selector: "ng-json-tree",
  templateUrl: "./ng-json-tree.component.html",
  styleUrls: ["./ng-json-tree.component.scss"]
})
export class NgJsonTreeComponent implements OnInit {
  @Input()
  data: any;

  @Input()
  key: string;

  @Input()
  parent: any;

  @ViewChildren(NgJsonTreeComponent) viewChildren!: QueryList<NgJsonTreeComponent>;

  isArray = false;

  isObject = false;

  isPrimitive = false;

  keys: Array<any> = [];

  public expanded = false;

  constructor() {}

  ngOnInit() {
    if (Number(this.key) !== 0 && !this.key) {
      this.isObject = typeof this.data === "object" && !Array.isArray(this.data);
      this.isArray = Array.isArray(this.data);
      this.isPrimitive = !this.isObject && !this.isArray;
    } else {
      this.data = this.parent[this.key];
      this.isObject = typeof this.data === "object" && !Array.isArray(this.data);
      this.isArray = Array.isArray(this.data);
      this.isPrimitive = !this.isObject && !this.isArray;
    }

    if (this.isObject && this.data !== null) {
      this.keys = Object.keys(this.data);
    }
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  expandAll() {
    this.expanded = !this.expanded;
    setTimeout(() => {
      this.viewChildren.toArray().forEach((c: NgJsonTreeComponent) => {
        c.expandAll();
      });
    }, 10);
  }
}
