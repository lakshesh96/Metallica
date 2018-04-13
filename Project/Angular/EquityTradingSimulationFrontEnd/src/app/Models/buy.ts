export enum OrderType {
	Market,
	Limit,
	Stop,
	StopLimit
}

export enum OrderSide {
	Buy,
	Sell
}
export class Buy {
    constructor(
       public OrderType: OrderType,
       public OrderSide: OrderSide,
       public StocksId: number,
       public Quantity: number,
       public UserId: number,
       public LimitPrice: number,
       public StopPrice: number,
       public BlockId: number,
       public PMId: number,
    
    ){}
}

