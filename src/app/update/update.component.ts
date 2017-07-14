import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TicketService } from '../services/ticket.service';

@Component({
    selector: 'update-component',
    templateUrl: 'update.component.html'
})

export class UpdateComponent {
    ticket: any = {
        id: 0,
        titulo: '',
        estado: ''
    }

    myForm: FormGroup;

    constructor(private router: Router, private route: ActivatedRoute, 
        private service: TicketService, private fb: FormBuilder) {
            this.myForm = this.fb.group({
                'id': [this.ticket.id],
                'titulo': [this.ticket.titulo],
                'estado': [this.ticket.estado]
            })
        }

    ngOnInit() {
        this.ticket.id = +this.route.snapshot.params['id'];
        this.service.getTicketMongo(this.ticket.id)
            .then(
                ticket => this.start(ticket),
                error => console.log(<any>error)
            );
    }

    start(ticket: any) {
        this.ticket = ticket;
        this.myForm = this.fb.group({
            'id': [this.ticket.id],
                'titulo': [this.ticket.titulo],
                'estado': [this.ticket.estado]
        })
    }

    onSubmit(values:any) {
        this.service.updateTicketMongo(
            this.ticket.id,
            values.titulo,
            values.estado
        ).then(
            ok => this.checking(ok),
            error => console.log(<any>error)
        )
    }

    checking(ok:any) {
        if(ok.nModified == 1) {
            alert("Los datos fueron modificados correctamente");
            this.router.navigate(['/ticket'], this.ticket.id);
        }
    }
}