import {Component} from '@angular/core';

@Component({
  selector: 'app-ifcomponent',
  templateUrl: './ifcomponent.component.html',
  styleUrls: ['./ifcomponent.component.css']
})
export class IfcomponentComponent {
  loggedIn = true
  isCollapsed:boolean = true
  text: string = 'hello World'
  constructor() {
  }
  toggleCollapse(){
    if(this.isCollapsed === true) this.isCollapsed = false
    else this.isCollapsed = true
    console.log(this.isCollapsed)
  }
  snus(event:any){
    console.log('snu')
    console.log(event)
  }
}

