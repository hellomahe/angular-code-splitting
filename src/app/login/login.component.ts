import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public title = 'app';
	public name = '';
	public isLoggedIn = false;

	constructor(public _shared: SharedService) {
		
	}
	ngOnInit() {
		this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
		// this.name = this._shared.getUserName()
	}
	login() {
		localStorage.setItem('isLoggedIn', 'true');
		const name = `whatever ${(Math.random()*1000).toFixed()}`;
		this._shared.setUserData({
			name,
			loggedIn: new Date()
		})
		this.isLoggedIn = true;
	}
	logout() {
		console.log('logging out')
		localStorage.setItem('isLoggedIn', 'false');
		this.isLoggedIn = false
	}

}
