import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private user = {
    name: 'default',
    loggedIn: null,
  }
  private cart = [{
    id: 0,
    name: 'Beer',
    price: 100,
    quantity:12
  }, {
      id: 1,
      name: 'Fruits',
      price: 50,
      quantity:7
  }]
  constructor() {

  }

  setUserData(user) {
    this.user = user;
  }

  getUserName() {
    return this.user.name
  }
  getCartData() {
    return this.cart
  }
  getItem(index) {
    return this.cart[index]
  }
  postItemInCart(item) {
    this.cart.push(item)
  }
  removeItemFromCart(index) {
    this.cart.splice(index, 1);
  }
  changeQuanity(index, qt) {
    this.cart[index].quantity = qt;
  }
  resetUserDate() {
    this.user = {
      name: null,
      loggedIn: null,
    };
    this.cart = [];
  }

}
