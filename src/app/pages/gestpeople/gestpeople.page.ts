import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Person } from 'src/app/models/person.model';
import { PersonListService } from 'src/app/services/personlist.service';
import { FormComponent } from 'src/app/form/form.component';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom, reduce } from 'rxjs';

@Component({
  selector: 'app-gestpeople',
  templateUrl: './gestpeople.page.html',
  styleUrls: ['./gestpeople.page.scss'],
})
export class GestpeoplePage {

  constructor(
    private data: PersonListService,
    private assignmentData: AssignmentsService,
    private modal: ModalController,
    private alert: AlertController,
    private translate:TranslateService
  ) { }

  getPeople() {
    return this.data.people$;
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:FormComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.data.addPerson(result.data.person);
            break;
          case 'Edit':
            this.data.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  onNewPerson(){
    this.presentPersonForm(null);
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person){
    const alert = await this.alert.create({
      header: await lastValueFrom(this.translate.get('home.warning')),
      message: await lastValueFrom(this.translate.get('people.deleteMessage')),
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
            this.data.deletePersonById(person.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async onPersonExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: await lastValueFrom(this.translate.get('people.errorMessage')),
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

  onDeletePerson(person){
     if(!this.assignmentData.getAssignmentsByPersonId(person.id).length)
     this.onDeleteAlert(person);
    else
      this.onPersonExistsAlert(person);
   
    
  }

}
