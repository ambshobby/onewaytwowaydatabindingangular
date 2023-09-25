import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewaydataBindingComponent } from './onewaydata-binding/onewaydata-binding.component';
//import { ParentchildpropertybindingComponent } from './parentchildpropertybinding/parentchildpropertybinding.component';
import { FormsModule } from '@angular/forms';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { NewpcComponent } from './newpc/newpc.component';
import { DropdownautoupdateComponent } from './dropdownautoupdate/dropdownautoupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewaydataBindingComponent,
    
    ParentchildComponent,
         NewpcComponent,
         DropdownautoupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
