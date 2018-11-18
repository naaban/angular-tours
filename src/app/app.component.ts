import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/core/services/theme.service';
import { MatButtonToggleGroup, MatButtonToggle, MatListItem, MatChipList } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;
  isRedTheme : Observable<boolean>;
  @ViewChild(MatButtonToggleGroup) group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isRedTheme = this.themeService.isRedTheme;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.toggles.forEach(toggle => toggle.buttonToggleGroup = this.group);
    });
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    console.log(checked);
  }
  toggleRedTheme(checked: boolean) {
    this.themeService.setRedTheme(checked);
    console.log(checked);
  }
}