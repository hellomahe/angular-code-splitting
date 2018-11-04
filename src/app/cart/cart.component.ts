import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart=[]
  constructor(private _shared: SharedService) {
    this.cart = _shared.getCartData();
  }

  ngOnInit() {
  }

}
