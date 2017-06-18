import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mocks';

@Injectable()
export class TicketService {

    miVariableTicketGlobal = "I am a global variable";

    getTicket() {
        return TICKETS;
    }
    getVariableGlobal():string {
        return this.miVariableTicketGlobal;
    }


}