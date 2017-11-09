import { ToastService } from '../../services/toast/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../modules/item/item.module';
import { ShoppingListService } from '../../services/shopping-list/shopping-list-service';
/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
      this.shopping.addItem(item).then(ref => {
        this.toast.show(`${item.name} added!`); //$ to bind the particular item on name
        this.navCtrl.setRoot('HomePage', { key: ref.key }); // turn back to hoempage after add
        //console.log(ref.key);
      })
  }
}
