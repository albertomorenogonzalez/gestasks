import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Gestionar Personas', url: '/home/gestpeople', icon: 'people' },
    { title: 'Gestionar Tareas', url: '/home/gesttasks', icon: 'create' },
    { title: 'Asignar Tareas', url: '/home/asigntasks', icon: 'person-add' },
    { title: 'Ver Tareas Asignadas', url: '/home/seetasks', icon: 'file-tray-full' },
  ];

  //La pestaña home está permanentemente seleccionada debido a que el resto de páginas están dentro de la página home (buscar forma de solucionarlo)
  
  constructor() {}
}
