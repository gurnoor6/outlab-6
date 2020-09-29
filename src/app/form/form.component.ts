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

  // get the loader to set loading when data is being fetched
  @ViewChild('loader')
  loader:any;

  // variables to store state of error and success messages
  error = false;
  success = false;

  // initialise the form data
  initialFormData : FormFields = {
  							name:'',
  							email:'',
  							feedback:'Great',
  							comment:'',
  						  };
  formData : FormFields = this.initialFormData;

  // set the get and post urls
  url = "https://cs251-outlab-6.herokuapp.com/initial_values/";
  postUrl = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/";
  ngOnInit(){
  }

  // set the reactive form variable
  feedbackForm = this.fb.group({
  	name: [this.formData.name],
  	email:[this.formData.email],
  	feedback:[this.formData.feedback,Validators.required],
  	comment:[this.formData.comment]
  });


  // submit the form
  submitForm(){
  	// start the loader
  	this.loader.nativeElement.style.display="flex";
  	console.log(this.feedbackForm.value);

  	// this is how we call http post on reactive form
  	this.http.post(this.postUrl,this.feedbackForm.value)
  			 .subscribe(
  			 	// set the response onto the form object
  			 	(res)=>{
  			 		this.error=false;

  			 		// show success text
  			 		this.success=true;

  			 		// stop the loader
  			 		this.loader.nativeElement.style.display="none";

  			 		// reset the form data
  			 		this.feedbackForm.setValue(this.initialFormData);
  			 		console.log(res);
  			 	},

  			 	// show the error on screen
  			 	(err)=>{
  			 		this.error = true;
  			 		this.loader.nativeElement.style.display="none";
  			 		console.log(err);
  			 	}
  			 );
  }

  ngAfterViewInit(){
  	this.getData();
  }

  getData(){
  	this.loader.nativeElement.style.display="flex";
  	this.http.get(this.url)
	 .subscribe(
	 	(data) =>{
	 		// unpack the data. Since we typecasted it into interface 
	 		// type, we could directly set it
	 		this.formData = {...(data as FormFields)};

	 		// update the fields in reactive form
	 		this.feedbackForm.setValue(this.formData);
	 		this.loader.nativeElement.style.display="none";
	 		this.error=false;
	 	},
	 	(error)=>{
	 		this.error=true;
	 		this.loader.nativeElement.style.display="none";
	 	}
	 )
  }

}
