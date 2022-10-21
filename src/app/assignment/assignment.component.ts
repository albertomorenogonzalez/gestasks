import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { Person } from '../models/person.model';
import { AssignmentsService } from '../services/assignments.service';
import { PersonListService } from '../services/personlist.service';
import { TaskListService } from '../services/tasklist.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment: Assignment;

  constructor(
    private assignmentData:AssignmentsService,
    private personData:PersonListService,
    private taskData:TaskListService
  ) { }

  ngOnInit() {}

  getPersonById(id: number) {
    return this.personData.getPersonById(id);
  }

  getTaskById(id: number) {
    return this.taskData.getTaskById(id);
  }

  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }

}
