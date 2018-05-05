import { Commodity } from "./commodity";
import { Counterparty } from "./counterparty";

export class TradeTable {
	Id : string;
	Date : Date;
	Status : Status;
	UserId : number;
	CommodityId : number;
	Commodity: Commodity;
	Quantity : number;
	Price : number;
	Side : Side;
	CounterPartyId: number;
	CounterParty: Counterparty;
	LocationId : number;
	Location: Location;
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
