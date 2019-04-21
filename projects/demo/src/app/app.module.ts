import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgJsonTreeModule } from "../../../ng-json-tree/src/public_api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgJsonTreeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
