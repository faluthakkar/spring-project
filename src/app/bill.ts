import { Address } from "./address";

export class Bill {
    id!:number;
    dateTime!:string;
    oldReading!:number;
    newReading!:number;
    billedUnits!:number;
     totalAmount!:number
    
     consumerId!:number;
     connectionId!:number
    connectionTypeId!:number

}
