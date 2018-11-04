import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name = null;
  public cart = null;

  constructor(private _shared: SharedService) {
    this.name = this._shared.getUserName();
    this.cart = this._shared.getCartData()
  }

  ngOnInit() {
  }

}
