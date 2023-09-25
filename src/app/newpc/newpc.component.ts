import { Component ,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-newpc',
  templateUrl: './newpc.component.html',
  styleUrls: ['./newpc.component.scss']
})
export class NewpcComponent {

var1:any=''

calling_var1(){
  console.log(this.var1)
  
}
@Input() new_prop=''

}
