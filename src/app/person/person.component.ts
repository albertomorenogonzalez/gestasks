import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonListService } from '../services/personlist.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() person: Person;

  constructor(
    private data:PersonListService
  ) { }

  ngOnInit() {}

  onEditClick(){
    this.onEdit.emit(this.person);
  }

  onDeleteClick(){
    this.onDelete.emit(this.person);
  }

}
