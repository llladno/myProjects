import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent {
  items = ['Angular', 'react', 'Vue', 'bootstrap', 'node.js']
  message = new Date().toLocaleTimeString()

  constructor() {
    let a: number = 2
    console.log(a)
    setInterval(()=>{
      this.message = new Date().toLocaleTimeString()
    },1000)
  }

}
