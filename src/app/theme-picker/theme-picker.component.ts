import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  ngOnInit() {
 
  }

  colors : any = {};
private themeWrapper = document.querySelector('body');


themeOne(){
  this.colors = {
    globalNavColor : '#fff',
    globalNavBackground : '#df2424',
    globalCardColor : '#757c0a',
    globalCardBackground : '#757c0a',
    globalFooterColor : '#df2424',
    globalFooterBackground : '#df2424',
    globalFooterAlignment : '#fff',
    globalButtonColor : '#fff',
    globalButtonBackground : '#fff',
    globalPrimary : 'rgb(255, 0, 0)',
    globalSecondary : 'rgb(255, 0, 0)'
  }
  this.global(this.colors);
}
themeTwo(){
  this.colors = {
     globalNavColor : 'rgb(84, 5, 136)',
     globalNavBackground : '#df2424',
     globalCardColor : '#757c0a',
     globalCardBackground : '#757c0a',
     globalFooterColor : '#df2424',
     globalFooterBackground : '#df2424',
     globalFooterAlignment : '#fff',
     globalButtonColor : '#fff',
     globalButtonBackground :' #4812c5',
     globalPrimary : 'rgb(108, 3, 129)',
     globalSecondary : 'rgb(192, 1, 182)',
  }
  this.global(this.colors)
}

global(stylesheet) {
  console.log(stylesheet);
  
  // Navigation Styles
  if (stylesheet.globalNavColor) {
    this.themeWrapper.style.setProperty('--navColor', stylesheet.globalNavColor);
  }
  if (stylesheet.globalNavBackground) {
    this.themeWrapper.style.setProperty('--navBackground', stylesheet.globalNavBackground);
  }

  // Card Styles
  if (stylesheet.globalCardColor) {
    this.themeWrapper.style.setProperty('--cardColor', stylesheet.globalCardColor);
  }
  if (stylesheet.globalNavBackground) {
    this.themeWrapper.style.setProperty('--cardBackground', stylesheet.globalCardBackground);
  }

  // Footer Styles
  if (stylesheet.globalFooterColor) {
    this.themeWrapper.style.setProperty('--footerColor', stylesheet.globalFooterColor);
  }
  if (stylesheet.globalFooterBackground) {
    this.themeWrapper.style.setProperty('--footerBackground', stylesheet.globalFooterBackground);
  }
  if (stylesheet.globalFooterAlignment) {
    this.themeWrapper.style.setProperty('--footerAlignment', stylesheet.globalFooterAlignment);
  }

  // Button Styles
  if (stylesheet.globalButtonColor) {
    this.themeWrapper.style.setProperty('--buttonColor', stylesheet.globalButtonColor);
  }
  if (stylesheet.globalButtonBackground) {
    this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
  }
  if (stylesheet.globalPrimary) {
    this.themeWrapper.style.setProperty('--primary', stylesheet.globalPrimary);
  }
  if (stylesheet.globalSecondary) {
    this.themeWrapper.style.setProperty('--secondary', stylesheet.globalSecondary);
  }
}

}