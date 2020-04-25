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
  }

/**
 * the part below is for push buttons
 */
  onClickOne()
  {
    this.themeService.darkGreytheme();
    
  }

  onClickTwo(){
    this.themeService.darkGreyOrangeTheme();
   

  }

  onClickThree(){
    this.themeService.orangeWhiteTheme()
  }
/**
 * the part below is for toggle buttons
 */
  onChangeDarkGrey()
  {
    this.themeService.darkGreytheme();
    this.changeSwitchState(2,3);
  }

  onChangeGreyOrange()
  {
    this.themeService.darkGreyOrangeTheme();
    this.changeSwitchState(1,3);
  }
  
  onChangeOrangeWhite()
  {
    this.themeService.orangeWhiteTheme();
    this.changeSwitchState(1,2);
  }

//select which toggle button to reset
  changeSwitchState(toggleNumber1:number,toggleNumber2:number)
  {
    this.toggleThemes.get(`toggle${toggleNumber1}`).setValue(false);
    this.toggleThemes.get(`toggle${toggleNumber2}`).setValue(false);
  }



}
