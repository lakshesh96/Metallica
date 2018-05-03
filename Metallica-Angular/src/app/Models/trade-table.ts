export class TradeTable {
  Id : string;
  Date : DateTimeFormat;
  Status : Status;
  UserId : number;
  CommodityId : number;
  Quantity : number;
  Price : number;
  Side : Side;
  CounterPartyId : number;
  LocationId : number;
constructor (){}
}
enum Side{
    Buy,
    Sell
}
enum Status{
    Open,
    Nominated
}
