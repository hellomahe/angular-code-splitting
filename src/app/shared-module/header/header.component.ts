import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service';
@Component({
  selector: 'app-header',
  template: `
  <h3>
    Hello {{_shared.getUserName()}}, You have {{(this._shared.getCartData()).length}} items in your cart
  </h3>
  `})
export class HeaderComponent implements OnInit {

  constructor(public _shared: SharedService) {
  }

  ngOnInit() {
  }

}
