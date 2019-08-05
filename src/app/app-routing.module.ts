import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { Screen1Component } from './components/screen1/screen1.component' 
import { Screen2Component } from './components/screen2/screen2.component' 
import { Screen3Component } from './components/screen3/screen3.component' 



const routes: Routes = [
    // {path: 'app-root', component: AppComponent},
    {path: 'screen1', component: Screen1Component},
    {path: 'screen2', component: Screen2Component},
    {path: 'screen3', component: Screen3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
