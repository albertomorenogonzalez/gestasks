import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { TaskListService } from '../services/tasklist.service';
import { Task } from '../models/task.model';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-taskselectable',
  templateUrl: './taskselectable.component.html',
  styleUrls: ['./taskselectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements OnInit, ControlValueAccessor {

  selectedTask:Task=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private data:TaskListService
  ) { }


  writeValue(obj: any): void {
    this.selectedTask = this.data.getTaskById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getTask(){
    return this.data.getTasks();
  } 

  onTaskClicked(task:Task, accordion:IonAccordionGroup){
    this.selectedTask = task;
    accordion.value='';
    this.propagateChange(this.selectedTask.id);
  }

}
