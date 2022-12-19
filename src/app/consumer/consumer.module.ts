import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerSaveComponent } from './consumer-save/consumer-save.component';
import { ConsumerUpdateComponent } from './consumer-update/consumer-update.component';
import { ConsumerDeleteComponent } from './consumer-delete/consumer-delete.component';



@NgModule({
  declarations: [
    ConsumerSaveComponent,
    ConsumerUpdateComponent,
    ConsumerDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsumerModule { }
