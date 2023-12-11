import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-getallauthor',
  templateUrl: './getallauthor.component.html',
  styleUrls: ['./getallauthor.component.css']
})
export class GetallauthorComponent {
  authors: any[] = [];
  updateForm!: FormGroup;

  constructor(private bmsService: BmsService, private formBuilder: FormBuilder) { }





  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      a_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
      a_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      a_email: new FormControl('', [Validators.required, Validators.email]),
      a_phone: new FormControl('', [Validators.required, Validators.pattern(/^[9876]\d{9}$/)]),
    });
    this.fetchAllauthors();
  }




  fetchAllauthors() {
    this.bmsService.servicegetAllauthors().subscribe(
      (resp) => {
        this.authors = resp;
        console.log(this.authors);
        if (this.authors.length === 0) {
          alert('No authors found. table is empty.');
        }
      },
      (error) => {
        alert('Error fetching authors:' + error);
      }
    );
  }




  private refreshPage(): void {
    window.location.reload();
  }


  onClickEdit(a_id: number) {
    // get the book based on the id
    let currentBook = this.authors.find((currentElem) => {
      return currentElem.a_id === a_id;
    })

    console.log(this.updateForm);

    // populate the form with book details
    this.updateForm.patchValue({
      a_id: currentBook.a_id,
      a_name: currentBook.a_name,
      a_email: currentBook.a_email,
      a_phone: currentBook.a_phone
    });

    // Log the form value to check
    console.log(this.updateForm.value);

  }




  deleteauthor(deleteauthorForm: any) {
    this.bmsService.servicedeletebyidauthor(deleteauthorForm).subscribe(
      (resp) => {
        console.log(resp);
        alert("Data deleted successfully........😃😃😃");
        this.refreshPage();
      },
      (err) => {
        console.log(err);
        alert("ID not found!!! or \nSomething went wrong.....😔😔😔 \nPlease Try Again.....");
      }
    );
  }






  get a_id() {
    return this.updateForm.get('a_id');
  }

  get a_name() {
    return this.updateForm.get('a_name');
  }
  get a_email() {
    return this.updateForm.get('a_email');
  }
  get a_phone() {
    return this.updateForm.get('a_phone');
  }

  updateAuthor(getbyidauthor: any) {
    const updateauthorForm = this.updateForm.value;

    this.bmsService.serviceupdateauthor(getbyidauthor, updateauthorForm).subscribe(
      (resp) => {
        console.log(resp);
        alert('Data updated successfully........😃😃😃');
        this.refreshPage();
      },
      (err) => {
        console.log(err);
        alert('Invalid ID for update or \nsomething went wrong.....😔😔😔  \nPlease Try Again.....');
      }
    );
  }


}
