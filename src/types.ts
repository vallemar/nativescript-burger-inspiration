export interface Item {
    id: number,
    name: string,
    price: number,
    currency: string,
    img: string
}


export interface ItemCart extends Item{
    amount: number,
    totalPrice: number
}