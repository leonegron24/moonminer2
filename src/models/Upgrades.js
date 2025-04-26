export class Upgrades{
        /**
     * 
     * @param {{
        * id?: string
        * name: string,
        * price: number,
        * qty: number,
        * multiplier: number,
        * }} data 
        */
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.qty = data.qty
        this.multiplier = data.multiplier
    }
}