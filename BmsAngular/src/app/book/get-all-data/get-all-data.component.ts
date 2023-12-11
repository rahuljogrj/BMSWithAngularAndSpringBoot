import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-get-all-data',
  templateUrl: './get-all-data.component.html',
  styleUrls: ['./get-all-data.component.css']
})



export class GetAllDataComponent implements OnInit {

  books: any[] = [];
  authors: any[] = [];
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

    this.fetchAllBooks();

  }


  fetchAllBooks() {
    this.bmsService.servicegetAllBooks().subscribe(
      (resp) => {
        this.books = resp;
        console.log(resp);

      },
      (error) => {
        alert("Book Table is Empty....");
      }
    );
  }


  
  deletebook(deletebookForm: any) {
    this.bmsService.servicedeletebyidbook(deletebookForm).subscribe(
      (resp) => {
        console.log(resp);
        alert("Id found and \ndeleted successfully........😃😃😃");
        this.refreshPage();
      },
      (err) => {
        console.log(err);
        alert("ID not found!!! or \nSomething went wrong.....😔😔😔 \nPlease Try Again.....")
      }

    );
  }


  private refreshPage(): void {
    window.location.reload();
  }


  onClickEdit(b_id: number) {
    // get the book based on the id
    let currentBook = this.books.find((currentElem) => {
      return currentElem.b_id === b_id;
    })

    console.log(this.updateForm);

    // populate the form with book details
    this.updateForm.patchValue({
      b_id: currentBook.b_id,
      b_name: currentBook.b_name,
      b_price: currentBook.b_price,
      b_quntity: currentBook.b_quntity,
      b_published_date: currentBook.b_published_date
    });

    // Log the form value to check
    console.log(this.updateForm.value);

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
        this.fetchAllBooks();
      },
      (err) => {
        console.log(err);
        alert('Invalid ID for update or \nsomething went wrong.....😔😔😔  \nPlease Try Again.....');
      }
    );
  }


}
