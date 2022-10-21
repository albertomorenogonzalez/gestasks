import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { TaskListService } from 'src/app/services/tasklist.service';
import { TaskFormComponent } from 'src/app/taskform/taskform.component';

@Component({
  selector: 'app-gesttasks',
  templateUrl: './gesttasks.page.html',
  styleUrls: ['./gesttasks.page.scss'],
})
export class GesttasksPage {

  constructor(
    private data: TaskListService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  getTasks(): Task[] {
    return this.data.getTasks();
  }

  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
      component:TaskFormComponent,
      componentProps:{
        task:task
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.data.addTask(result.data.task);
            break;
          case 'Edit':
            this.data.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }
  onNewTask(){
    this.presentTaskForm(null);  
  }

  onEditTask(task){
    this.presentTaskForm(task);
  }

  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Estás seguro de que quieres borrar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.data.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteTask(task){
   this.onDeleteAlert(task);
    
  }
}
