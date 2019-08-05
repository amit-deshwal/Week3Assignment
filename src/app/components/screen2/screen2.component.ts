import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import {data} from './data'
import { Chart} from 'angular-highcharts'
import { interval } from 'rxjs';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  public years = [];
  public values=[];
  public interval;

  Linechart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    xAxis : {
      categories: this.years
    },
    series: [
      {
        type: 'line',
        name: 'Line 1',
        data:this.values
      }
    ]
  });
 
  // add point to chart series
  
  add() {
    this.interval=setInterval(()=>{
      this.years.push(Number.parseInt(this.years[this.years.length-1])+1);
      this.Linechart.addPoint(Math.floor(Math.random() * 1000));

    }, 1000)
    
  }

  
  clear(){
    clearInterval(this.interval);
  }

  constructor() { }

  ngOnInit() {   
    
    data.forEach((obj) => {
      this.years.push(obj.year);
      this.values.push(parseInt(obj.value));
    });
    console.log(this.years);
    console.log(this.values);
    

  }

}
