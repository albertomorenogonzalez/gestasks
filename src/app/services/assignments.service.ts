import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
      assignedAt: "28/10/2022",
      date: "29/10/2022"
    },
  ]

  private assignmentsSubject:BehaviorSubject<Assignment[]> = new BehaviorSubject(this._assignments);
  public assignments$ = this.assignmentsSubject.asObservable();

  id:number = this._assignments.length+1;
  constructor() {

  }

  getAssignments(){
    return this._assignments;
  }

  getAssignmentById(id:number){
    return this._assignments.find(p=>p.id==id);
  }

  getAssignmentsByTaskId(taskId:number):Assignment[]{
    return this._assignments.filter(a=>a.taskId == taskId);
  }

  getAssignmentsByPersonId(personId:number):Assignment[]{
    return this._assignments.filter(a=>a.personId == personId);
  }

  deleteAssignmentById(id:number){
    this._assignments = this._assignments.filter(p=>p.id != id); 
    this.assignmentsSubject.next(this._assignments);
  }

  addAssignment(assignment:Assignment){
    assignment.id = this.id++;
    this._assignments.push(assignment);
    this.assignmentsSubject.next(this._assignments);
  }

  updateAssignment(assignment:Assignment){
    var _assignment = this._assignments.find(p=>p.id==assignment.id);
    if(_assignment){
      _assignment.personId = assignment.personId;
      _assignment.taskId = assignment.taskId;
      _assignment.assignedAt = assignment.assignedAt;
      _assignment.date = null;
    }
    
    this.assignmentsSubject.next(this._assignments);
  }
}
