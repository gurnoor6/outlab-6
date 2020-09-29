import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
// import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder,
  			  private http:HttpService) { }

  defaultName="blah";
  defaultEmail="";
  defaultFeedback="";
  defaultComment="";
  url = "https://cs251-outlab-6.herokuapp.com/initial_values/";
  async ngOnInit(){
  		this.http.get(this.url)
  				 .subscribe(
  				 	(data) =>{
  				 		this.defaultName = data.name;
  				 		this.defaultEmail = data.email;
  				 		this.defaultFeedback = data.defaultFeedback;
  				 		this.defaultComment = data.defaultComment;
  				 		console.log(data);
  				 		console.log(this.defaultName);
  				 	}
  				 )
  }

  feedbackForm = this.fb.group({
  	name: [this.defaultName],
  	email:[''],
  	feedback:['ok',Validators.required],
  	comments:['']
  });


  submitForm(){
  	console.log(this.feedbackForm);
  }

}
