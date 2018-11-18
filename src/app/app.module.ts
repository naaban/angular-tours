import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatOptionModule,
  MatFormFieldModule,
  MatFormFieldControl,
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from 'src/core/services/theme.service';
import { ApiService } from './api.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    CreatePackageComponent,
  
    FooterComponent,

  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserModule,
    MatToolbarModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatFormFieldModule ,
    MatBottomSheetModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatTreeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [
    FormBuilder,
    ThemeService,
    ApiService

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
