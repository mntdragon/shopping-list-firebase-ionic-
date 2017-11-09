// add these things inside app as the part of its own module, but goign to add it in this folder
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from './../../modules/item/item.module';

@Injectable()
export class ShoppingListService {

    //create the reference to our databse, tell angular fire which 
    // part of firebase we interested in
    private shoppingListRef = this.db.list<Item>('shopping-list');

    //idea: need a ref to the shopping list inside of firebase
    constructor(private db: AngularFireDatabase ){

    } //inject angular fire databse

    getShoppingList(){
        return this.shoppingListRef;
    }

    addItem(item: Item){
        return this.shoppingListRef.push(item);
    }

    editItem(item: Item){
        return this.shoppingListRef.update(item.key, item); //(FIrebase operation, data)
    }

    removeItem(item: Item){
        return this.shoppingListRef.remove(item.key);
    }
}