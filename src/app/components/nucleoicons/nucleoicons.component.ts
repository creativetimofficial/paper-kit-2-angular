import { Component, OnInit, Inject, Renderer, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nucleoicons',
  templateUrl: './nucleoicons.component.html',
  styleUrls: ['./nucleoicons.component.scss']
})
export class NucleoiconsComponent implements OnInit, OnDestroy {

    constructor( private element : ElementRef) {
    }
  ngOnInit() {
    //   var navbar : HTMLElement = this.element.nativeElement;
    //   console.log(body)
      const body = document.getElementsByTagName('app-nucleoicons')[0];
      let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    //   navbar.length = 0;
    //   navbar.remove;
      console.log(navbar);

    //   navbar.hiddezn();
        navbar.classList.add('navbar-hidden');
      body.classList.add('demo-icons');

  }
  ngOnDestroy(){
       let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
       navbar.classList.remove('navbar-hidden');
  }

}
