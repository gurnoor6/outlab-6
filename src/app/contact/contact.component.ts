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

  state = "big";
  constructor() { }

  ngOnInit() {
  }

  toggleState(){
  	this.state=="big"?this.state="small":this.state="big";
  }

}
