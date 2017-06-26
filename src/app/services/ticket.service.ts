import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mocks';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TicketService {

    miVariableTicketGlobal = "I am a global variable";

    getTickets() {
        return TICKETS;
    }
    getVariableGlobal():string {
        return this.miVariableTicketGlobal;
    }
    getTicket(id:number) {
        let ticket = TICKETS.find(x => x.id == id);
        return ticket;
    }

    getTicketObserver(id) {
        return Observable.create(observer=>{
            setTimeout(()=>{
                observer.next(
                    TICKETS.find(
                        (ticket)=>ticket.id == id
                    )
                )
            }, 3000);
        });
    }

}