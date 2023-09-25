import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdownautoupdate',
  templateUrl: './dropdownautoupdate.component.html',
  styleUrls: ['./dropdownautoupdate.component.scss']
})
export class DropdownautoupdateComponent {
  @Output() dataFromChild= new EventEmitter<any>();
  
  dropdownupdate(tempvalue:any)
  {
    this.dataFromChild.emit(tempvalue);

  }
}
