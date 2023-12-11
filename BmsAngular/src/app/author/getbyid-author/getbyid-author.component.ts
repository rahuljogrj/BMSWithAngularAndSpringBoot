import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-getbyid-author',
  templateUrl: './getbyid-author.component.html',
  styleUrls: ['./getbyid-author.component.css']
})
export class GetbyidAuthorComponent {

  getbyidForm!: FormGroup;
  author: any[] = [];

  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }



  ngOnInit(): void {
    this.getbyidForm = this.formbuilder.group({
      a_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
    })
  }

  get a_id() {
    return this.getbyidForm.get('a_id');
  }

  getById(getbyidAuthor: any) {
    this.bmsService.servicefetchbyidauthor(getbyidAuthor).subscribe(
      (resp) => {
        // Check if the response is an object
        if (typeof resp === 'object' && !Array.isArray(resp)) {
          // Convert the object to an array, assuming an array property exists
          this.author = Object.values(resp);
        } else {
          // Use the response directly if it's already an array
          this.author = resp;
        }
        console.log('API Response:', resp);
        alert('Id found:');
        console.log(this.author);
      },
      (error) => {
        alert('Id not found!!!!');
      }
    );
  }
  // getById(getbyidAuthor: any) {
  //   this.bmsService.servicefetchbyidauthor(getbyidAuthor).subscribe(
  //     (resp) => {
  //       this.author = resp;
  //       console.log(this.author);
  //       alert('id found:');

  //     },
  //     (error) => {
  //       alert('Error fetching author by ID:' + error);
  //     }
  //   );
  // }

}