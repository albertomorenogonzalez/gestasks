import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Console } from 'console';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'people', url: '/gestpeople', icon: 'people' },
    { title: 'tasks', url: '/gesttasks', icon: 'create' },
    { title: 'assignments', url: '/assigntasks', icon: 'person-add' },
    { title: 'schedule', url: '/seetasks', icon: 'file-tray-full' }
  ];

  language = 0
  
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es')
  }

  onLanguage() {
    this.language = (this.language+1)%2

    switch(this.language) {
      case 0:
        this.translate.setDefaultLang('es')
        break;
      case 1:
        this.translate.setDefaultLang('en')
        break;
    }
  }
}
