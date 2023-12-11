import { Component, OnInit } from '@angular/core';








import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  createAuthor!: FormGroup;

  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAuthor = this.formbuilder.group({
      a_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      a_email: new FormControl('', [Validators.required, Validators.email]),
      a_phone: new FormControl('', [Validators.required, Validators.pattern(/^[9876]\d{9}$/)]),
    })
  }

  get a_name() {
    return this.createAuthor.get('a_name');
  }
  get a_email() {
    return this.createAuthor.get('a_email');
  }
  get a_phone() {
    return this.createAuthor.get('a_phone');
  }

  register(createauthorForm: any) {
    this.bmsService.servicecreateauthor(createauthorForm.value).subscribe(
      (resp) => {
        console.log(resp);
        createauthorForm.reset();
        alert("Data added successfully........😃😃😃");
      },
      (err) => {
        console.log(err);
        alert("something went wrong.....😔😔😔 \nPlease Try Again.....");
      }

    );
  }



}
