import { Component, OnInit, ViewChild, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(private router:Router,
              private cdr: ChangeDetectorRef) { }
  @ViewChild('slider') 
  slider:any;


  ngOnInit(){
  }

  ngAfterViewInit(){
    if( !(localStorage.getItem("darkMode")===null) ){
      this.slider.checked = true;
      this.toggleDarkMode(this.slider);
      this.cdr.detectChanges();
    }
  }

  goTo(link){
  	this.router.navigate([link]);
  }

  toggleDarkMode(el){
    if(el.checked){
      document.querySelector('body').classList.add('my-dark-theme');
      localStorage.setItem("darkMode","yes");
    }
    else{
      document.querySelector('body').classList.remove('my-dark-theme');
      localStorage.removeItem("darkMode");
    }
  }

}
