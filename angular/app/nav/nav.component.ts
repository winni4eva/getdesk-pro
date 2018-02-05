import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  @Input('navEnabled') navEnabled: boolean = false;
  @Input('authEnabled') authEnabled: boolean = true;
  @Input('navigation') navigation: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
