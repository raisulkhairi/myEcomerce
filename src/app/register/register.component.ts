import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = FormGroup;
  submitted = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
 
  }

}
