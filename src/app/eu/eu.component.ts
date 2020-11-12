import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  Nome:string= "Jorge Leonardo Montes Silva";
  Idade:number= 32;
  Gosto:string="fazer Bolos";
  Nacionalidade:string="Venezolana";
  

  constructor() { }


  ngOnInit(): void {
  }

}
