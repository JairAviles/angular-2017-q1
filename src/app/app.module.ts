import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound/page.not.found.component';
import { InitComponent } from './init.component';
import { TicketDetail } from './tickets/ticket.detail';

//input
import { InputComponent } from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directives
import { GigantDirective } from './directives/gigant.directive';
import { HighlightDirective } from './directives/highlight.directive';

//service
import { TicketService } from './services/ticket.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './services/counter';

//routes
import { RouterModule, Routes} from '@angular/router';
import { APPROUTER } from './commons/router'; 

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HighlightDirective,
    PageNotFoundComponent,
    InitComponent,
    TicketDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: CounterReducer}),
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
