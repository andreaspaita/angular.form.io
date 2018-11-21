import { Form } from './form';
export class Formtitle {
    constructor(
        public title: string = '',
        public description: string = '',
        public pages : boolean = false,
        public nombrespages: number = 0,
        public actif : number = 0,
        public unique : number = 0,
        public submit : string = '',
        public formrender : Array<Form> = null,

    ) { }
}