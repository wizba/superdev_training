import { Injectable } from '@angular/core';
import { dark_grey, orange_white, dark_grey_orange } from './themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

constructor() { }
darkGreytheme() {
  this.setTheme(dark_grey);
}

orangeWhiteTheme() {
  this.setTheme(orange_white);
}
darkGreyOrangeTheme()
{
  this.setTheme(dark_grey_orange);
}
private setTheme(theme: {}) {
  Object.keys(theme).forEach(k =>
    document.documentElement.style.setProperty(`--${k}`, theme[k])
  );
}
}
