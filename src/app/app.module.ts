import '../main';

//import dipendenze AngularJS

import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '../environments/environment';
import { VerificaComponent } from './verifica/verifica.component';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

//import dipendenze Angular 14

if (environment.production) {
  enableProdMode();
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [VerificaComponent],
})

//Dichiarazione componenti Angular 14

export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['weatherApp']);
  }
}

//Export app in Angular 14 nel quale viene iniettata l'app in AngularJS upgradata

angular
  .module('weatherApp')
  .directive(
    'appVerifica',
    downgradeComponent({
      component: VerificaComponent,
    }) as angular.IDirectiveFactory
  );

platformBrowserDynamic().bootstrapModule(AppModule);

//downgrade di un componente in Angular 14 in una direttiva di AngularJS //* questa cosa va fatta per far riconoscere il componente al routing in AngularJS
