import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { AssignmentFormComponent } from 'src/app/assignmentform/assignmentform.component';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-assigntasks',
  templateUrl: './assigntasks.page.html',
  styleUrls: ['./assigntasks.page.scss'],
})
export class AssigntasksPage {

  constructor(
    private data: AssignmentsService,
    private modal: ModalController,
    private alert: AlertController,
    private translate:TranslateService
  ) { }



  getAssignments() {
    return this.data.assignments$;
  }

  async presentAssignmentForm(assignment:Assignment){
    const modal = await this.modal.create({
      component:AssignmentFormComponent,
      componentProps:{
        assignment:assignment
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.data.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.data.updateAssignment(result.data.assignment);
            break;
          default:
        }
      }
    });
  }
  onNewAssignment(){
    this.presentAssignmentForm(null);  
  }

  onEditAssignment(assignment){
    this.presentAssignmentForm(assignment);
  }

  async onDeleteAlert(assignment){
    const alert = await this.alert.create({
      header: await lastValueFrom(this.translate.get('home.warning')), 
      message: await lastValueFrom(this.translate.get('assignments.deleteMessage')),
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
            this.data.deleteAssignmentById(assignment.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteAssignment(assignment){
   this.onDeleteAlert(assignment);
    
  }
}
