import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Screen1Component } from './components/screen1/screen1.component';
import { Screen2Component } from './components/screen2/screen2.component';
import { Screen3Component } from './components/screen3/screen3.component';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts'

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ChartModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  // exports:[ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
