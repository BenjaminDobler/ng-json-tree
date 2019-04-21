import { NgModule } from "@angular/core";
import { NgJsonTreeComponent } from "./ng-json-tree.component";
import { CommonModule } from "@angular/common";
import { DoubleClickDirective } from "./doubleclick.directive";

@NgModule({
  declarations: [NgJsonTreeComponent, DoubleClickDirective],
  imports: [CommonModule],
  exports: [NgJsonTreeComponent]
})
export class NgJsonTreeModule {}
