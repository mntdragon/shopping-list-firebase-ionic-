export interface Item{
    key?: string; //?key is optional, firebase will create the key
    name: string;
    quantity: number;
    price: number;
}