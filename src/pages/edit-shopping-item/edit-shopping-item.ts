import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../modules/item/item.module';
import { ToastService } from '../../services/toast/toast.service';
/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private shopping: ShoppingListService, private toast: ToastService) {
  }

  // ionViewDidLoad() {
  //   console.log(this.navParams.get('item')); //show detail of the object
  // }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
    this.shopping.editItem(item)
    .then(() =>{
      this.toast.show(`${item.name} saved!`); //$ to bind the particular item on name
      this.navCtrl.setRoot('HomePage'); // turn back to hoempage after save
    });
  }

  removeItem(item: Item){
    this.shopping.removeItem(item)
    .then(() =>{
      this.toast.show(`${item.name} deleted!`); //$ to bind the particular item on name
      this.navCtrl.setRoot('HomePage'); // turn back to hoempage after delete
    })
  }
}
