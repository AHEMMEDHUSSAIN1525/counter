import { Component, ViewChild,} from '@angular/core';

@Component({
  selector: 'app-ngpractice',
  templateUrl: './ngpractice.component.html',
  styleUrls: ['./ngpractice.component.css']
})
export class NgpracticeComponent  {

@ViewChild('Input')
text;
TextMessage:string='';
count:number=0

ValidInput(){
  this.count=this.count+1;
  this.TextMessage="you entered" +" " +this.count +" " +"Times";
  console.log(this.text.nativeElement.value);
}

  

}
