import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './services/localeService';
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
    private translate: TranslateService,
    private localeService:LocaleService,
    private cdr:ChangeDetectorRef
  ) {
    this.translate.setDefaultLang('es')
  }

  onLanguage() {
    this.language = (this.language+1)%2

    switch(this.language) {
      case 0:
        this.translate.setDefaultLang('es');
        this.localeService.registerCulture('es');
        console.log(this.localeService.locale);
        break;
      case 1:
        this.translate.setDefaultLang('en');
        this.localeService.registerCulture('en-uk');
        console.log(this.localeService.locale);
        break;
    }
    this.cdr.detectChanges();
  }
}
