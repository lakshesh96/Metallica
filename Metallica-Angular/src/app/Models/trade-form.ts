export class TradeFormModel {
    constructor(
        public TradeDate: number,
        public Commodity: string,
        public Side: boolean,
        public Counterparty: string,
        public Price: number,
        public Quantity: number,
        public Location: string){  }
}
