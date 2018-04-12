export class Blocks{
    constructor(
        public block_status:number,
        public trader_name:string,
        public stock_name:string,
        public symbol:string,
        public size:number,
        public vol_left:number,
        public date:string,
        public order_type:string,
        public side:string,
    ){

    }
}