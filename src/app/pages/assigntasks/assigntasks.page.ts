import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
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
    private alert: AlertController
  ) { }



  getAssignments(): Assignment[] {
    return this.data.getAssignments();
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
      header: '¿Estás seguro de que quieres borrar esta asignación?', 
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
