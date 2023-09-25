import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaydata-binding',
 // template:`<h1> {{usernameoneway}}</h1>`,
   templateUrl: './onewaydata-binding.component.html',
  styleUrls: ['./onewaydata-binding.component.scss']
})
export class OnewaydataBindingComponent 
{
 usernameoneway:string='batata'

arrayofstudents:any=['Ram','sham','rahim','sunny']
}
