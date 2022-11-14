import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  detailsForm!: FormGroup
  constructor(
    private fb:FormBuilder
  ){}
  ngOnInit(): void {
    this.formDetails();
  }

  formDetails(){
    this.detailsForm = this.fb.group({
      details: this.fb.array([
        this.fb.group({
          text: ['']
        })
      ])
    })
  }
  get details() : FormArray{
    return this.detailsForm.get('details') as FormArray;
  }

  addDetails(){
   const textForm = this.fb.group({
    text : ['']
   });
   this.details.push(textForm);
  }
  removeDetails(i:any){
    console.log("remove id..................",i);
    this.details.removeAt(i);
  }
}
