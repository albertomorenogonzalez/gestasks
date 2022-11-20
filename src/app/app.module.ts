import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import en from '@angular/common/locales/en';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';

registerLocaleData(es)
registerLocaleData(en)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      })],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID,
      useValue: 'es'} //como cambiar el formato de fecha segun el idioma ? y en los cambios de añadir modificar ?
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
