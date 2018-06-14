import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNavList, MatSelectModule, MatSidenavModule,
  MatSliderModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ChCalculatorComponent } from './ch-calculator/ch-calculator.component';
import { RationCalculatorComponent } from './ration-calculator/ration-calculator.component';
import {MaterialImportsModule} from "./materialImports.module";

@NgModule({
  declarations: [
    AppComponent,
    ChCalculatorComponent,
    RationCalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
