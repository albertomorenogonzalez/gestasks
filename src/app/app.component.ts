import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Gestionar Personas', url: '/gestpeople', icon: 'people' },
    { title: 'Gestionar Tareas', url: '/gesttasks', icon: 'create' },
    { title: 'Asignar Tareas', url: '/assigntasks', icon: 'person-add' },
    { title: 'Ver Tareas Asignadas', url: '/seetasks', icon: 'file-tray-full' }
  ];
  
  constructor() {}
}
