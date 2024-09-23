import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  constructor(private http: HttpClient) {}
  // products: any[] = [];

  // fetchData() {
  //   this.http.get('https://fakestoreapi.com/products').subscribe((data: any) => {
  //     this.products = data;
  //   });
  // }

  // ngOnInit() {
  //   this.fetchData();
  // }
}
