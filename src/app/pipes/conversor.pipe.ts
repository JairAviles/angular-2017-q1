import { Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'conversorPipe' })
export class ConversorPipe implements PipeTransform {
    transform(value:number, exponent:string):number {
        let exp = parseFloat(exponent);
        return (isNaN(value) ? 1 : value) * (isNaN(exp) ? 1 : exp);
    }
}