import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'elements-app2';
  scriptsInjected = false;
  scripts = ['runtime', 'polyfills', 'vendor', 'styles', 'main'];
  moduleUrl = 'http://localhost:4300/';

  ngOnInit() {
    this.injectScripts();
  }

  injectScripts() {
    console.log(this.scriptsInjected);
    if (this.scriptsInjected) { return; }
    let docFrag = document.createDocumentFragment();
    this.scripts.forEach(v => {
      const scriptTag: HTMLScriptElement = document.createElement('script');
      scriptTag.setAttribute('type', 'text/javascript');
      scriptTag.setAttribute('src', `${this.moduleUrl}${v}.js`);
      scriptTag.setAttribute('type', 'module');
      docFrag.appendChild(scriptTag);
    });
    this.scriptsInjected = true;
    document.body.appendChild(docFrag);
    docFrag = null;
  }
}
