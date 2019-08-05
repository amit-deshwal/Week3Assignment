import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

  show: boolean = false
  public wordcount=0;
  vcount=0;
  article=0;
  longestWord=0;
  shortestWord=0;

  onClick(value: string){

    // value.trim().replace(/\s\s+/g,' ')
    this.wordcount1(value)
    this.vcount = this.vcount1(value)
    this.article = this.article1(value)
    this.longestWord = this.longestWord1(value)
    this.shortestWord = this.shortestWord1(value)

    this.show = true
    
  }

  wordcount1(value){
    this.wordcount = 0;
    this.wordcount=value.trim().replace(/\s\s+/g,' ').split(' ').length;
    if(value==""){
      this.wordcount=0;
      return;
    }
  }

  vcount1(value){
    let count = 0;
    let vowels = ['a','e','i','o','u'];
    for( let i = 0 ; i < value.length; i++){
      // console.log(value[i], vowels.indexOf(value[i]))
      if(vowels.indexOf(value[i])!==-1){
        count++;
      }
    }
    return count;    
  }
  article1(value){
    let article = 0;
    let at = value.trim().replace(/\s\s+/g,' ').split(' ');
    let articles = ['a','the','an'];
    for( let i = 0 ; i < at.length; i++){
      // console.log(at[i], articles.indexOf(at[i]))
      if(articles.indexOf(at[i])!==-1){
        article++;
      }
    }
    return article; 
    
  }

  longestWord1(value){
    let longestWord = 0;
    let lword = value.trim().replace(/\s\s+/g,' ').split(' ')
    // console.log(lword);
    
    for(var i=0; i< lword.length; i++){
      if(lword[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
        longestWord = lword[i].length; // ...then longestWord takes this new value
           
      }
    }
    return longestWord 
  }
  shortestWord1(value){
    let shortestWord = 10000;
    let sword = value.trim().replace(/\s\s+/g,' ').split(' ')
    console.log(sword);
    
    for(var i=0; i< sword.length; i++){
      if(sword[i].length < shortestWord){ // If strSplit[i].length is greater than the word it is compared with...
        shortestWord = sword[i].length; // ...then longestWord takes this new value
           
      }
    }
    return shortestWord 
    
  }

  constructor() { }

  ngOnInit() {
  }

}
