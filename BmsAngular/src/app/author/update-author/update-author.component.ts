import { Component, OnInit } from '@angular/core';
import { BmsService } from 'src/app/bms.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  updateForm!: FormGroup;
  constructor(private bmsService: BmsService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      a_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
      a_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      a_email: new FormControl('', [Validators.required, Validators.email]),
      a_phone: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern(/^[9876]\d{9}$/)]),
    });
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
        updateauthorForm.reset();
      },
      (err) => {
        console.log(err);
        alert('Invalid ID for update or \nsomething went wrong.....😔😔😔  \nPlease Try Again.....');
      }
    );
  }
}