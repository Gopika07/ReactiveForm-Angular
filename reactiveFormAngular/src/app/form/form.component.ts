import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  detailsForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middleName: new FormControl('', Validators.maxLength(20)),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(50), Validators.pattern("^[0-9]*$")]),
    gender: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      landmark: new FormControl('', Validators.maxLength(20)),
      city: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      zipcode: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern("^[0-9]*$")]),
      country: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    }),
    hobbies: new FormArray([new FormControl('')]),
  });

  hobbies =  this.detailsForm.get('hobbies') as FormArray;
  
  addHobbies(){
    this.hobbies.push(new FormControl(''));
  }

  removeHobbies(index: number){
    this.hobbies.removeAt(index);
  }

  clear(){
    const zeroInput = this.hobbies.at(0);
    this.hobbies.clear();
    this.hobbies.push(zeroInput);
  }

  onSubmit(){
    console.log(this.detailsForm.value);
  }
}
