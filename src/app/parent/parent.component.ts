import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild(ChildComponent)childcomponent:ChildComponent;
Upper(){
  this.childcomponent.Uppercount();
}
Lower(){
  this.childcomponent.Lowercount();
}
  constructor() { }

  ngOnInit(): void {
  }

}
