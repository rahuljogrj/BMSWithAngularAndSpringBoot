// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { BmsService } from 'src/app/bms.service';

// @Component({
//   selector: 'app-get-by-id',
//   templateUrl: './get-by-id.component.html',
//   styleUrls: ['./get-by-id.component.css']
// })
// export class GetByIdComponent implements OnInit {

//   getbyidForm!: FormGroup;
//   book: any[] = [];

//   constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.getbyidForm = this.formbuilder.group({
//       b_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
//     })
//   }


//   get b_id() {
//     return this.getbyidForm.get('b_id');
//   }



//   getById(getbyidbook: any) {
//     this.bmsService.servicefetchbyidbook(getbyidbook).subscribe(
//       (resp) => {
//         this.book = resp;
//         alert('Id found:');
//         console.log(this.book);


//       },
//       (error) => {
//         alert("Id not found!!!!");
//       }
//     );
//   }

// }






import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BmsService } from 'src/app/bms.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  getbyidForm!: FormGroup;
  book: any[] = [];

  constructor(private bmsService: BmsService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getbyidForm = this.formbuilder.group({
      b_id: new FormControl('', [Validators.required, Validators.pattern(/^([1-9]|[1-9][0-9]|1000)$/)]),
    })
  }

  get b_id() {
    return this.getbyidForm.get('b_id');
  }

  getById(getbyidbook: any) {
    this.bmsService.servicefetchbyidbook(getbyidbook).subscribe(
      (resp) => {
        // Check if the response is an object
        if (typeof resp === 'object' && !Array.isArray(resp)) {
          // Convert the object to an array, assuming an array property exists
          this.book = Object.values(resp);
        } else {
          // Use the response directly if it's already an array
          this.book = resp;
        }
        console.log('API Response:', resp);
        alert('Id found:');
        console.log(this.book);
      },
      (error) => {
        alert('Id not found!!!!');
      }
    );
  }
}