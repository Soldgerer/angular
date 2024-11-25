import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cstudents',
  templateUrl: './cstudents.component.html',
  styleUrl: './cstudents.component.css'
})
export class CstudentsComponent {

  form!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.buildForm();
  }
  private buildForm() {
    const nameRgx = "^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$";
    const mailRgx = "^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$"

    this.form = this.formBuilder.group({
      name : ['', [Validators.required, Validators.pattern(nameRgx)]],
      mail : ['', [Validators.required, Validators.pattern(mailRgx), Validators.minLength(10), Validators.maxLength(50)]]

    }
    )
  }
  keep(e:Event){
    e.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
    }
    
    console.log("No information available");
  }

  get mailField(){
    return this.form.get('mail');
    
  }

  get nameField(){
    return this.form.get('name');
  }
}
