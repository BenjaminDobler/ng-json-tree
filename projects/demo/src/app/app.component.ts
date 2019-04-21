import { Component } from "@angular/core";
import * as testData from "./data.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public data: any = testData;
  title = "demo";
}
