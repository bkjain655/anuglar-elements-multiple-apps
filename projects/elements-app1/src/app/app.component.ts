import { Component, Input, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, OnChanges {
  @Input() content = '';
  title = 'elements-app1';

  ngOnChanges(changes) {
    console.log(changes);
    console.log(this.content);
  }

  ngOnInit() {
    console.log(this.content);
  }
}
