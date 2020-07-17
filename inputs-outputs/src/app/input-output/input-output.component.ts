import {Component, OnInit} from '@angular/core';
import {Person} from './model/person.model';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  currentName = 'john';

  name = '';

  inputObject: Person = {
    name: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangedName(newName: string): void {
    this.currentName = newName;
  }

  onChangedName2(newName: string): void {
    this.currentName = newName;
  }

  onModelChange(value: string): void {
    console.log(value);
    this.inputObject = {
      ...this.inputObject
    };
  }

}
