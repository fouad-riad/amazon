export interface Articolo{
    id: number;
    userId:string;
    title:string;
    text:string;
    published:boolean
}
// dto:data transfer object
export class ArticoloAddDTO{
    constructor(
        public title:string="",
        public text:string="",
        public userId:number=0,
        public published:boolean=false
        ){

    }

}