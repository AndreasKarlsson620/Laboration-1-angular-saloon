import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectbeverageComponent } from './dialogue/selectbeverage/selectbeverage.component';
import { TheusualComponent } from './dialogue/theusual/theusual.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectbeverageComponent,
    TheusualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
