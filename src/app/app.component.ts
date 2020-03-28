import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-interceptor';
  name = 'Angular';
  url = 'https://api.myjson.com/bins/lcqog';
  carData = [];
  constructor(private http: HttpClient){

  }
  httpget() {
  return this.http.get(this.url);
}
  ngOnInit(){
this.httpget().subscribe((data: any) => {
  this.carData = data;
console.log(data);
}, err => {
console.log('Some error in HTTP get call');
}) 
  }
}
