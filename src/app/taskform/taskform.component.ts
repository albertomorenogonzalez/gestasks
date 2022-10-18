import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss'],
})
export class TaskFormComponent implements OnInit {

  taskForm:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('person') set task(task:Task){
    if(task){
      this.taskForm.controls.id.setValue(task.id);
      this.taskForm.controls.name.setValue(task.name);
      this.taskForm.controls.time.setValue(task.time);
      this.taskForm.controls.photo.setValue(task.photo);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.taskForm = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      time:[''],
      photo:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({task: this.taskForm.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
