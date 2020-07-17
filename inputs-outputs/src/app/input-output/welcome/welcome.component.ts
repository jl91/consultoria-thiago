import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnChanges {

  @Input()
  name: string;

  @Input()
  personObject: Person;

  @Output()
  changedName: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  color = 'primary';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeNameClick(event: MouseEvent): void {
    this.changedName.emit('Thiago');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


}
