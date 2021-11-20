import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { StoreService } from './shared/store.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
