import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginOrRegister',
  templateUrl: './loginOrRegister.component.html',
  styleUrls: ['./loginOrRegister.component.scss']
})
export class LoginOrRegisterComponent implements OnInit {

  showlogin= true;
  constructor() { }

  ngOnInit() {
  }

}
