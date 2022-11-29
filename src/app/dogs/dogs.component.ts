import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  title = "doguinhos bonitinhos"

  constructor() { }

  ngOnInit(): void {
  }

}
