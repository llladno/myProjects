import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  private schema: any;

  constructor() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(req => console.log(req))
  }
  okFn = function (){
    console.log('ok')
  }
  ngInit(){
    console.log("prikol")
    this.okFn
  }
}
let fn = function (){
  console.log('eblo')
}
fn()
