import { Component,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.scss']
})
export class ParentchildComponent 
{
  v1_name:any=''

  @Input() v1_name_prop=''

  v1_caller()
  {
    console.log(this.v1_name)
  }

}
