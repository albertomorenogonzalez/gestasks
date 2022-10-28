import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from '../models/assignment.model';

@Component({
  selector: 'app-assignmentform',
  templateUrl: './assignmentform.component.html',
  styleUrls: ['./assignmentform.component.scss'],
})
export class AssignmentFormComponent implements OnInit {

  assignmentForm:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('assignment') set assignment(assignment:Assignment){
    if(assignment){
      this.assignmentForm.controls.id.setValue(assignment.id);
      this.assignmentForm.controls.personId.setValue(assignment.personId);
      this.assignmentForm.controls.taskId.setValue(assignment.taskId);
      this.assignmentForm.controls.assignedAt.setValue(assignment.assignedAt);
      this.assignmentForm.controls.date.setValue(assignment.date);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.assignmentForm = this.fb.group({
      id:[null],
      personId:['', [Validators.required]],
      taskId:['', [Validators.required]],
      assignedAt:['', [Validators.required]],
      date:[null],
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({assignment: this.assignmentForm.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
