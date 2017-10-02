import { Component, OnInit, Inject, Renderer, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    private _router: Subscription;

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {
    }
    ngOnInit(){
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        // console.log(this.renderer);
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          document.querySelector('body').scrollTop = 0;
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
          const number = window.scrollY;
          if (number > 150) {
            // add logic
            navbar.classList.remove('navbar-transparent');
          } else {
            // remove logic
            navbar.classList.add('navbar-transparent');
          }
        });
    }
    removeFooter(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(titlee === 'signup' || titlee === 'nucleoicons'){
        return false;
      }
      else {
        return true;
      }
    }
    // removeNavbar(){
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   titlee = titlee.slice( 1 );
    //   if(titlee === 'nucleoicons'){
    //     return false;
    //   }
    //   else {
    //     return true;
    //   }
    // }
}
