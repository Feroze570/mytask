import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  results: any;
  array:any=[];
  constructor(private http:HttpClient){

 
  }

  ngOnInit() {
    this.http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe(res=>{
      this.results=res;
     this.array= this.results.hits
    console.log('results',this.results);
  })

  }




}
