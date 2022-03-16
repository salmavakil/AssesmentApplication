import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-buttonform',
  templateUrl: './buttonform.component.html',
  styleUrls: ['./buttonform.component.css']
})
export class ButtonformComponent implements OnInit {
  buttonform:FormGroup;
  count:number;
  error;

  constructor(private formBuilder: FormBuilder,) { 
  }
  

  ngOnInit(): void {
    this.buttonform = this.formBuilder.group({
      buttoncount: ["",[Validators.required, Validators.min(1)]],
    })
  }
  onSubmit(){
    this.count = this.buttonform.value.buttoncount;
    if(this.count==0){
      this.error=true;
    }else{
      this.error=false;
    }

  }
  reintializeForm(event){
    if(event===true){
      this.count=0;
      this.buttonform.reset();
    }
  }

}
