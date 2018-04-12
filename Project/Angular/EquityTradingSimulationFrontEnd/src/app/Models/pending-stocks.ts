export class PendingStocks 
{
    Trader_Name :string;
    Name:string;
    Symbol:string;
    Quantity:number;
    Buying_Price: number;
    CurrentPrice :number;
    Total_Value: number;
    typeoforder:string
    Side:string;
    constructor(Trader_Name,Name,Symbol,Quantity,Buying_Price,CurrentPrice,Total_Value,Type,Side)
    {
        this.Trader_Name=Trader_Name;
        this.Name=Name;
        this.Symbol=Symbol;
        this.Quantity=Quantity;
        this.Buying_Price=Buying_Price;
        this.CurrentPrice=CurrentPrice;
        this.Total_Value=Total_Value;
        this.typeoforder=Type;
        this.Side=Side;

    }
}
