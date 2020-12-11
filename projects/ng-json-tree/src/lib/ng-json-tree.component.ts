import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ng-json-tree",
  templateUrl: "./ng-json-tree.component.html",
  styleUrls: ["./ng-json-tree.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgJsonTreeComponent implements OnInit {
  private _data: any;

  private isRoot = false;

  public get data(): any {
    return this._data;
  }

  @Input()
  public set data(value: any) {
    this._data = value;
    if (this.isRoot) {
      this.control = JSON.parse(JSON.stringify(this.data));
      if (this.initialExpand) {
        this.setChildsProp("expanded", true);
      }
    }
    if (Number(this.key) !== 0 && !this.key) {
      this.isObject =
        typeof this.data === "object" && !Array.isArray(this.data);
      this.isArray = Array.isArray(this.data);
      this.isPrimitive = !this.isObject && !this.isArray;
    } else {
      this.isObject =
        typeof this.data === "object" && !Array.isArray(this.data);
      this.isArray = Array.isArray(this.data);
      this.isPrimitive = !this.isObject && !this.isArray;
    }

    if (this.isObject && this.data !== null) {
      this.keys = Object.keys(this.data);
    }
  }

  @Input()
  key: string;

  @Input()
  parent: any;

  @Input()
  showObjectPreview = true;

  @Input()
  initialExpand = false;

  @Input()
  public set level(value) {
    this._level = value;
  }

  public get level() {
    return this._level;
  }

  private _level = 0;

  isArray = false;

  isObject = false;

  isPrimitive = false;

  @Input()
  control: any = {};

  keys: Array<any> = [];

  @Input()
  private _expanded = false;
  public get expanded() {
    if (this.control) {
      return this.control.expanded;
    }
    return false;
  }

  constructor() {}

  ngOnInit() {
    if (Number(this.key) !== 0 && !this.key) {
      this.isRoot = true;
      if (this.data) {
        this.control = JSON.parse(JSON.stringify(this.data));
      }
    }
    if (this.initialExpand) {
      this.setChildsProp("expanded", true);
    }
  }

  toggleExpand(event) {
    this.control.expanded = !this.control.expanded;
  }

  getObjectPreview(data) {
    return JSON.stringify(data);
  }

  click() {
    if (this.control) {
      this.control.expanded = !this.control.expanded;
    }
  }

  dbClick() {
    if (this.allChildsExpanded()) {
      this.setChildsProp("expanded", false);
    } else {
      this.setChildsProp("expanded", true);
    }
  }

  setChildsProp(prop, value) {
    const iterate = (obj) => {
      for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
          if (typeof obj[property] === "object" && obj[property]) {
            obj[property][prop] = value;
            iterate(obj[property]);
          }
        }
      }
    };
    this.control.expanded = true;
    iterate(this.control);
  }

  allChildsExpanded() {
    const prop = "expanded";
    const value = true;
    let res = true;
    const iterate = (obj) => {
      for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
          if (typeof obj[property] === "object" && obj[property]) {
            res = res && obj[property][prop] === true;
            iterate(obj[property]);
          }
        }
      }
    };
    this.control.expanded = true;
    iterate(this.control);
    return res;
  }
}
