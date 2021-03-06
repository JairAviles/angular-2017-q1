import { Component, NgZone } from '@angular/core';

import { InputComponent } from './input/input.component';

import { TicketService } from './services/ticket.service';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthProviders, AuthMethods } from 'angularfire2';

interface AppState {
  counter: number;
}


@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets:any;
  ticketFirebase: any;

  ticketMongo:any;
  errorMessage:any;

  myForm : FormGroup;

  counter: Observable<number>;

  constructor(
    private ticketService: TicketService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _ngZone:NgZone,
    private router: Router,
    private af : AngularFire
  ) {
    
    this.callTicketsMongo();

    this.ticketFirebase = af.database.list('/ticket');
    /*
    this.ticketFirebase.push({
      'id': 1, 'titulo': 'no me funciona la impresora', 'estado': 'in progress'
    });

    this.ticketFirebase.push({
      'id': 2, 'titulo': 'no me funciona la computadora', 'estado': 'finish'
    });

    this.ticketFirebase.push({
      'id': 3, 'titulo': 'no me funciona el celular', 'estado': 'in progress'
    });

    this.ticketFirebase.push({
      'id': 4, 'titulo': 'no me funciona una lampara', 'estado': 'really'
    }); 

    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }); */

    this.counter = store.select('counter');
    this.tickets = ticketService.getTickets();
    this.myForm = fb.group({
      'name': ['Jair Israel']
    });    
  }

  votos = [
    {title: 'opción 1'},
    {title: 'opción 2'},
    {title: 'opción 3'},
    {title: 'opción 4'}
  ];

  addVoto(response:string) {
    this.votacion = "usted eligio: " + response;
  }

  callTicketsMongo() {
    this.ticketService.getTicketsMongo()
        .then(
             ticket => this.ticketMongo = ticket,
             error => this.errorMessage = <any>error
        )
  }

  cantidad = 5;
  factor = 1;

  onSubmit(value:string):void {
      console.log(value);
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }

  progress: number = 0;
  label:string;

  processOutsideOfAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress( 
        () => { console.log("finalizado sin ngZone");
    });
  }  

  processWithinAngularZone() {
    this.label = "inside";
    this.progress = 0;
    this._ngZone.runOutsideAngular(()=>{
      this._increaseProgress(() => {
        this._ngZone.run(()=> console.log("Finalizado con ngzone"));
      })
    });
  }  

  _increaseProgress(doneCallBack: () => void) {
        this.progress += 1;
        console.log(`Progreso: ${this.progress}%`);

        if(this.progress < 100) {
          window.setTimeout(()=>{
            this._increaseProgress(doneCallBack);
          }, 10)
        } else {
          doneCallBack();
        }

  }

  verMongoTicket(id:number): void {
    this.router.navigate(['/ticket', id]);
  }


  updateMongoTicket(id:number):void{
    this.router.navigate(['/ticketUpdate', id ]);
  }

  removeMongoTicket(id:number):void{
    this.ticketService.removeTicketMongo(id)
      .then(
          ok => this.checking(ok),
          error => console.log(<any>error)
        );
  }
  checking(ok:any){
        if(ok.n == 1){
            alert("Se elimino Correctamente");
        }
        this.callTicketsMongo();
    }

  verTicket(id: number):void {
    this.router.navigate(['/ticket', id]);
  }

  updateTicket(key:void) {
    console.log(key);
    this.ticketFirebase.update(key, {
      estado: 'modified state'
    });
  }

  removeTicket(key):void {
    console.log(key);
    this.ticketFirebase.remove(key);
  }

  removeAllTicket():void {
    this.ticketFirebase.remove();
  }
 
}
