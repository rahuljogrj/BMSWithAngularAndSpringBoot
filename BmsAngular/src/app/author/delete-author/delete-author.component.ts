import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';


@Component({
  selector: 'app-delete-author',
  templateUrl: './delete-author.component.html',
  styleUrls: ['./delete-author.component.css']
})
export class DeleteAuthorComponent {

  deletebyidForm!: FormGroup;
  author: any[] = [];

  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }



  ngOnInit(): void {
    this.deletebyidForm = this.formbuilder.group({
      a_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
    })
  }

  get a_id() {
    return this.deletebyidForm.get('a_id');
  }

  deleteauthor(deleteauthorForm: any) {
    this.bmsService.servicedeletebyidauthor(deleteauthorForm).subscribe(
      (resp) => {
        console.log(resp);
        alert("Data deleted successfully........😃😃😃");
        // this.resetForm(deleteauthorForm);
      },
      (err) => {
        console.log(err);
        alert("ID not found!!! or \nSomething went wrong.....😔😔😔 \nPlease Try Again.....");
        // this.resetForm(deleteauthorForm);
      }
    );
  }


}
