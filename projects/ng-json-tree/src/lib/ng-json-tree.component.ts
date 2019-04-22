import { Component, Input, OnInit, ViewChildren, QueryList, HostBinding } from "@angular/core";

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

  @Input()
  showObjectPreview = true;

  @Input()
  public set level(value) {
    this._level = value;
  }

  public get level() {
    return this._level;
  }

  private _level = 0;

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

  getObjectPreview(data) {
    return JSON.stringify(data);
  }

  /*
  @HostBinding("style.backgroundColor") get backgroundColor() {
    const col = this.lightenDarkenColor("#ffffff", this.level * -1);
    console.log(col + "  Level ", this.level);
    return col;
  }
  */
}
