import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() count: number;
  @Output("reintialize") reintializeFormChild: EventEmitter<boolean> = new EventEmitter<boolean>();
  dummyarray=[];
  randNumber:number;
  clicked=[];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    for(let i =0;i<this.count;i++){
      this.dummyarray.push(false);
    }
    console.log(this.dummyarray);
    setTimeout(() => {
      this.generaterandom();
    }, 1000);
  }
  generaterandom(){
    this.randNumber = Math.floor(Math.random() * this.count);
    if(this.clicked.length==this.count){
      // alert("Hurray! You won!!!");
      this._snackBar.open('Hurray! You have won!', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['green-snackbar']
      });
      this.clicked=[];
      this.dummyarray=[];
      this.reintializeFormChild.next(true);
    }else if(this.clicked.includes(this.randNumber)){
      this.generaterandom();
    }
  }
  changeColor(index){
    if(index===this.randNumber){
      this.clicked.push(this.randNumber);
      this.dummyarray[index]=true;
      setTimeout(() => {
        this.generaterandom();
      }, 1000);
    }else{
      this._snackBar.open('Sorry, You lost!', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
      this.clicked=[];
      this.dummyarray=[];
      this.reintializeFormChild.next(true);
    }
  }

}
