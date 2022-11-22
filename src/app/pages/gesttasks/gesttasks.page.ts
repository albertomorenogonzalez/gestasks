import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { TaskListService } from 'src/app/services/tasklist.service';
import { TaskFormComponent } from 'src/app/taskform/taskform.component';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-gesttasks',
  templateUrl: './gesttasks.page.html',
  styleUrls: ['./gesttasks.page.scss'],
})
export class GesttasksPage {

  constructor(
    private data: TaskListService,
    private assignmentData: AssignmentsService,
    private modal: ModalController,
    private alert: AlertController,
    private translate:TranslateService
  ) { }

  getTasks() {
    return this.data.tasks$;
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
      header: await lastValueFrom(this.translate.get('home.warning')),
      message: await lastValueFrom(this.translate.get('tasks.deleteMessage')),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get('home.cancel')),
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: await lastValueFrom(this.translate.get('home.delete')),
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

  async onTaskExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: await lastValueFrom(this.translate.get('tasks.errorMessage')),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get('home.close')),
          role: 'close',
          handler: () => {
           
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteTask(task){
    if(!this.assignmentData.getAssignmentsByTaskId(task.id).length)
      this.onDeleteAlert(task);
    else
      this.onTaskExistsAlert(task);
  }
}
