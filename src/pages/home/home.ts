import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../modules/item/item.module';

@IonicPage() //home.module.ts
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {
    
    this.shoppingList$ = this.shopping
                        .getShoppingList() //DB list
                        .snapshotChanges() //key and value 
                        .map( 
                          changes => {
                            return changes.map(c => ({
                              key: c.payload.key, 
                              ...c.payload.val(),
                            }))
                          }
                        )
                   //.getShoppingList() return a list of shoppign tiems     
                  //.snapshotChanges()allow to get both key ans value
                  /// .map() return list of changes and for each change we want to return changes.map where we have in new object that return a key with the payload key, then return payload value
  }

}
