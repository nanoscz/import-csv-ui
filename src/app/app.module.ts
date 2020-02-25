import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculateAnxietyPipe } from './pipes/calculate-anxiety.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculateAnxietyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
