import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SharedService } from './../../shared.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public item: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _shared: SharedService
  ) {
  }

  ngOnInit() {
    this.item = this._shared.getItem(Number(this.route.snapshot.paramMap.get('id')));
  }

}
