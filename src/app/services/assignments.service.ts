import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private _assignments: Assignment[] = [
    {
      id: 1,
      personId: 2,
      taskId: 1,
      assignedAt: "a",
      date: "a"
    },
  ]

  id:number = this._assignments.length+1;
  constructor() {

  }

  getAssignments(){
    return this._assignments;
  }

  getAssignmentById(id:number){
    return this._assignments.find(p=>p.id==id);
  }

  deleteAssignmentById(id:number){
    this._assignments = this._assignments.filter(p=>p.id != id); 
  }

  addAssignment(assignment:Assignment){
    assignment.id = this.id++;
    this._assignments.push(assignment);
  }

  updateAssignment(assignment:Assignment){
    var _assignment = this._assignments.find(p=>p.id==assignment.id);
    if(_assignment){
      _assignment.personId = assignment.personId;
      _assignment.taskId = assignment.taskId;
      _assignment.assignedAt = assignment.assignedAt;
      _assignment.date = assignment.date
    }
    
  }
}
