export class TradeForm {
    constructor(
        public TradeDate: number,
        public Commodity: string,
        public Side: boolean,
        public Counterparty: string,
        public Price: number,
        public Quantity: number,
        public Location: string){
            this.TradeDate = Date.now();
            this.Commodity = Commodity;
            this.Side = Side;
            this.Counterparty = Counterparty;
            this.Price = Price;
            this.Quantity = Quantity;
            this.Location = Location;
        }
}
