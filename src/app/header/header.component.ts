import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goTo(link){
  	this.router.navigate([link]);
  }

  toggleDarkMode(el){
    if(el.checked){
      document.querySelector('body').classList.add('my-dark-theme');
    }
    else{
      document.querySelector('body').classList.remove('my-dark-theme');
    }
  }

}
