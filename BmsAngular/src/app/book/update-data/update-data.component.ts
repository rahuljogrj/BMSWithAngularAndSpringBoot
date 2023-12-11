import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  book_id: number = 0;
  updateForm!: FormGroup;

  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.formbuilder.group({
      b_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
      b_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      b_price: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(10), Validators.pattern(/^-?\d+$/)]),
      b_quntity: new FormControl('', [Validators.required, Validators.pattern(/^-?\d+$/)]),
      b_published_date: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)])
    })
  }


  get b_id() {
    return this.updateForm.get('b_id');
  }
  get b_name() {
    return this.updateForm.get('b_name');
  }

  get b_price() {
    return this.updateForm.get('b_price');
  }

  get b_quntity() {
    return this.updateForm.get('b_quntity');
  }

  get b_published_date() {
    return this.updateForm.get('b_published_date');
  }



  updateBook(getbyidbook: any) {
    const updatebookForm = this.updateForm.value;

    this.bmsService.serviceupdatebook(getbyidbook, updatebookForm).subscribe(
      (resp) => {
        console.log(resp);
        alert('Data updated successfully........😃😃😃');
      },
      (err) => {
        console.log(err);
        alert('Invalid ID for update or \nsomething went wrong.....😔😔😔  \nPlease Try Again.....');
      }
    );
  }
}
