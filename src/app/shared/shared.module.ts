import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WindowComponent } from './window/window.component';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ ],
  exports: [ CommonModule, FormsModule ]
})
export class SharedModule { }
