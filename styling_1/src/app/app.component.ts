import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mdb-angular-free';
  toggleThemes: FormGroup;

constructor(public themeService:ThemeService,private formBuilder: FormBuilder){

}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.toggleThemes=this.formBuilder.group({
      toggle1:[],
      toggle2:[],
      toggle3:[]
    });

    this.toggleThemes.valueChanges.subscribe(value=>{
      console.log(value);
    })
  }


  test()
  {
    this.themeService.darkGreytheme();
    console.log('hello');
  }
}
