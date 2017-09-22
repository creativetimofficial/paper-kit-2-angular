import { Component, OnInit, Inject, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nucleoicons',
  templateUrl: './nucleoicons.component.html',
  styleUrls: ['./nucleoicons.component.scss']
})
export class NucleoiconsComponent implements OnInit {

    constructor( private element : ElementRef) {
    }
  ngOnInit() {
    //   var navbar : HTMLElement = this.element.nativeElement;
    //   console.log(body)
      const body = document.getElementsByTagName('html')[0];
      let navbar = document.getElementsByTagName('app-navbar')[0];
    //   navbar.length = 0;
    //   navbar.remove;
    //   console.log(navbar)

    //   navbar.hiddezn();

      body.classList.add('demo-icons');

  }

}
