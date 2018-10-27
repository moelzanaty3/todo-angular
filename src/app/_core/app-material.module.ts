import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AppMaterialModule {}
