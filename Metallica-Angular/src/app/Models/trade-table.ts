export class TradeTable {
  Id : string;
  Date : DateTimeFormat;
  Status : Status;
  userId : number;
  CommodityId : number;
  Quantity : number;
  Price : any;
  Side : Side;
  CounterPartyId : number;
  LocationId : number;

  constructor(id, date,status, commodityId, userId, qty, price, side, counterpartyId, locationId)
  {
      this.Id = id;
      this.Date = date;
      this.Status = status;
      this.CommodityId = commodityId;
      this.userId = userId;
      this.Quantity = qty;
      this.Price = price;
      this.Side = side;
      this.CounterPartyId = counterpartyId;
      this.LocationId = locationId;
    }
}
enum Side{
    Buy,
    Sell
}
enum Status{
    Open,
    Nominated
}
