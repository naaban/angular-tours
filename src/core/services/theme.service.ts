import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class ThemeService {
  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  private _redTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();
  isRedTheme = this._redTheme.asObservable();
  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }
  setRedTheme(isRedTheme: boolean) {
    this._redTheme.next(isRedTheme);
  }
}