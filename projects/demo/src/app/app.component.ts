import { Component } from "@angular/core";
import * as testData from "./data.json";
import * as testData2 from "./data2.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public testData1 = testData;
  public testData2 = testData2;

  public data: any;
  title = "demo";
}
