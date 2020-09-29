import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {FormFields} from '../interfaces/formFields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder,
  			  private http:HttpService) { }

  @ViewChild('loader')
  loader:any;


  formData : FormFields = {
  							name:'',
  							email:'',
  							feedback:'',
  							comment:'',
  						  };

  url = "https://cs251-outlab-6.herokuapp.com/initial_valus/";
  ngOnInit(){
  	this.getData();
  }

  feedbackForm = this.fb.group({
  	name: [this.formData.name],
  	email:[this.formData.email],
  	feedback:[this.formData.feedback,Validators.required],
  	comment:[this.formData.comment]
  });


  submitForm(){
  	console.log(this.feedbackForm);
  }

  ngAfterViewInit(){
    this.loader.nativeElement.style.display="flex";
  }

  getData(){
  	this.http.get(this.url)
	 .subscribe(
	 	(data) =>{
	 		this.formData = {...(data as FormFields)};
	 		this.feedbackForm.setValue(this.formData);
	 		this.loader.nativeElement.style.display="none";
	 	},
	 	(error)=>{
	 		console.log(error);
	 	}
	 )
  }

}
