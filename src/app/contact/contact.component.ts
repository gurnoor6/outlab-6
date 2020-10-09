import { Component, OnInit } from '@angular/core';
import {shrink} from '../animations/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[
  	shrink
  ]
})
export class ContactComponent implements OnInit {

  state: any[] = ["big","big"];
  constructor() { }

  ngOnInit() {
  }

  toggleState(idx){
  	this.state[idx]=="big"?this.state[idx]="small":this.state[idx]="big";
  }

}
