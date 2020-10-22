import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';
import { ElementsModule } from './modules/elements/elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    // RouterModule.forRoot([],  {useHash: true, initialNavigation: 'enabled', enableTracing: true})
    RouterTestingModule.withRoutes([], {useHash: true, initialNavigation: true, enableTracing: true})
  ],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent]
})
// export class AppModule {}
export class AppModule implements DoBootstrap {
  readonly customElementsMap = {
    'gs-cockpit-sp': AppComponent
  };

  constructor(private injector: Injector, private router: Router) {
    this.registerElements();
  }

  registerElements() {
    // tslint:disable-next-line: forin
    for (const ele in this.customElementsMap) {
      const webComponent = createCustomElement(this.customElementsMap[ele], {injector: this.injector});
      customElements.define(ele, webComponent);
    }
  }

  ngDoBootstrap() {
    this.router.initialNavigation();
  }
}
