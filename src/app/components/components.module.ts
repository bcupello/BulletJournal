import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';

// Módulo que concentra os componentes que devem ser usados em mais de um lugar

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [ErrorComponent],
  entryComponents: [ErrorComponent]
})
export class ComponentsModule { }
