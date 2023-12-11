
import { Component, OnInit } from '@angular/core';
import { BmsService } from 'src/app/bms.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  createForm!: FormGroup;


  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      b_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      b_price: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10), Validators.pattern(/^-?\d+$/)]),
      b_quntity: new FormControl('', [Validators.required, Validators.pattern(/^-?\d+$/)]),
      b_published_date: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)])
    })
  }



  get b_name() {
    return this.createForm.get('b_name');
  }

  get b_price() {
    return this.createForm.get('b_price');
  }

  get b_quntity() {
    return this.createForm.get('b_quntity');
  }

  get b_published_date() {
    return this.createForm.get('b_published_date');
  }





  register(createbookForm: any) {
    this.bmsService.servicecreatebook(createbookForm.value).subscribe(
      (resp) => {
        console.log(resp);
        createbookForm.reset();
        alert('Data added successfully........😃😃😃');
      },
      (err)=>{
        alert("something wrong with your data....!! \nPlease try again");
        console.log(err);
      }
    );
  }


}
