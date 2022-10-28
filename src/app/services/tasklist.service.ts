import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  private _tasks: Task[] = [
    {
      id: 1,
      name: 'Training',
      time: 12000,
      photo: 'http://drive.google.com/uc?export=view&id=1SjcLlsDuCX1GRWEFVMwx1p-Dh11Uu7C3'
    },
    {
      id: 2,
      name: 'Gym',
      time: 3600,
      photo: 'http://drive.google.com/uc?export=view&id=196PkvmDiTkuXX-OUd2Xq0CST2NRRc3wu',
    }
  ]

  id:number = this._tasks.length+1;
  constructor() {

  }

  getTasks(){
    return this._tasks;
  }

  getTaskById(id:number){
    return this._tasks.find(p=>p.id==id);
  }

  deleteTaskById(id:number){
    this._tasks = this._tasks.filter(p=>p.id != id); 
  }

  addTask(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
  }

  updateTask(task:Task){
    var _task = this._tasks.find(p=>p.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.time = task.time;
      _task.photo = task.photo;
    }
    
  }
}
