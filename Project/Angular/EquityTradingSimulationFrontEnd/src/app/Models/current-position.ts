export class CurrentPosition {
    constructor(public Trader_Name :string,
        public Stock_Name:string,
         public Symbol:string, 
         public Quantity:number,
        public Buying_Price: number,
        public Current_Price :number ,
        public Total_Value: number ){
}
}
