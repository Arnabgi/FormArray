import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  detailsForm!: FormGroup;
  json_value : any;
  constructor(
    private fb:FormBuilder
  ){}
  ngOnInit(): void {
    this.formDetails();
    this.patchDetails();
  }

  formDetails(){
    this.detailsForm = this.fb.group({
      details: this.fb.array([
        this.fb.group({
          text: []
        })
      ])
    })
  }

  get details() : FormArray{
    return this.detailsForm.get('details') as FormArray;
  }

  patchDetails(){
    this.json_value = [{name:"Anik"},{name:"Bapi"},{name:"Bodhiswata"},{name:"Arnab"}];
    console.log("jsonData.........",this.json_value);
    this.detailsForm.setControl('details',this.setDetailsForm(this.json_value))
  }

  setDetailsForm(json_value: any): FormArray {
    const formArray: FormArray = new FormArray([]);
    if(json_value.length){
      json_value.forEach((e:any) =>{
        formArray.push(
          this.fb.group({
            text : e.name
          })
        )
      })
    }
    return formArray;
  }

  addDetails(){
   const textForm = this.fb.group({
    text : []
   });
   this.details.push(textForm);
  }
  
  removeDetails(i:any){
    console.log("remove id..................",i);
    this.details.removeAt(i);
  }
}
