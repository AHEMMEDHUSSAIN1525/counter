import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  persons:String=("ahemmed");
  count:number=0;
 Uppercount(){
   this.count=this.count+1;
   this.persons="count:"+this.count;
 }
Lowercount(){
  this.count=this.count-1;
  this.persons="count:"+this.count;
}
  ngOnInit(): void {
  }

}
