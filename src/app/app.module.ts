import { AppRoutingModule } from './_core/app-routing.module';
import { AppMaterialModule } from './_core/app-material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoDataService, ApiService } from './_services';
import {
  TodoListComponent,
  TodoListFooterComponent,
  TodoListHeaderComponent,
  TodoListItemComponent,
  TodoHomeComponent
} from './_components';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListHeaderComponent,
    TodoListFooterComponent,
    TodoListItemComponent,
    TodoHomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
