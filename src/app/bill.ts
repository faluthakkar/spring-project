import { Address } from "./address";

export class Bill {
    id!:number;
    dateTime!:string
    oldReading!:string
    newReading!:string
    billedUnits!:string
    totalAmount!:number
    consumer?:{
        "id"?:number
        
    }
    connections?:{
        "id"?:number
    }
    connection_type?:{
        "id"?:number
    }
    

}
