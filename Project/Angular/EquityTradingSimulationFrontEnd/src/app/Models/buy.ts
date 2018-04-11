export class Buy {
    constructor(
        public Id:number,
        public OrderType:string,
        public OrderSide:string,
        public Quantity:number,
        public StockID:number,
        public UserID:number,
        public OrderStatus:string,
        public LimitPrice:number,
        public CurrentPrice:number,
        public StopPrice:number,
        public BlockID:number,
        public PMId:number
    ){}
}

