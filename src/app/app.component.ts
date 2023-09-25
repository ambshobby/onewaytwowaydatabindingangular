import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'oneandtwowaydatabinding';
  newvar_v1:any='check me '
  new1:any='old parent'
  new_pc_var='kuch bhi'
  dropdata:any=['any','one']

  parentdatahandler(val:any)
  {
    this.dropdata.push(val)
    
  }
}
