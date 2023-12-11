import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-delete-by-id',
  templateUrl: './delete-by-id.component.html',
  styleUrls: ['./delete-by-id.component.css']
})
export class DeleteByIdComponent implements OnInit {


  deletebyidForm!: FormGroup;

  book: any[] = [];

  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }


  ngOnInit(): void {
    this.deletebyidForm = this.formbuilder.group({
      b_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
    })
  }


  get b_id() {
    return this.deletebyidForm.get('b_id');
  }

  deletebook(deletebookForm: any) {
    this.bmsService.servicedeletebyidbook(deletebookForm).subscribe(
      (resp) => {
        console.log(resp);
        alert("Id found and \ndeleted successfully........😃😃😃");
      },
      (err) => {
        console.log(err);
        alert("ID not found!!! or \nSomething went wrong.....😔😔😔 \nPlease Try Again.....")
      }

    );
  }



}

