import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound/page.not.found.component';
import { InitComponent } from './init.component';
import { TicketDetail } from './tickets/ticket.detail';
import { UpdateComponent } from './update/update.component';

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

//material
import { MaterialModule } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'hammerjs';

//firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAVw5a-h9My7qsGFSblw62yOH3tBS9N6TQ",
    authDomain: "angular-platzi-12e67.firebaseapp.com",
    databaseURL: "https://angular-platzi-12e67.firebaseio.com",
    projectId: "angular-platzi-12e67",
    storageBucket: "angular-platzi-12e67.appspot.com",
    messagingSenderId: "670757863882"
}

export const myFirebaseAuthConfig = {
  providers: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HighlightDirective,
    PageNotFoundComponent,
    InitComponent,
    UpdateComponent,
    TicketDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: CounterReducer}),
    RouterModule.forRoot(APPROUTER),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    MaterialModule
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
