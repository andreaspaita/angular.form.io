export class Form {
    constructor(
        public error : string = '',
        public input: string = '',
        public name: string = '',
        public idjs: number = 0,
        public value: string = '',
        public valuname:string = '',
        public labele:string = '',
        public labelname:string = '',
        public choices:string ='',
        public choicesname:string ='',
        public type: string ='',
        public placeholder: string = '',
        public placeholdername:string='',
        public addsub : boolean = false,
        public subcategorie:  Array<Form> = [],
        public position : number,
        public obligatoire = 0,
        public selected = 0,
        public description = null,
        public formmultiple = false,
        public hidden:boolean,
        public obligatoireVisible:boolean = true
    ) { }
}