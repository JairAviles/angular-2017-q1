import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//input
import { InputComponent } from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directives
import { GigantDirective } from './directives/gigant.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
