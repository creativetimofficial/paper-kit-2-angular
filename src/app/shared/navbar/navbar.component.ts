import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(public location: Location) {}

  ngOnInit() {
  }

  isHome(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
    //   console.log(title)
      if( titlee === '/home' ){
        return true;
      }
      else {
        return false;
      }
  }
  isDocumentation(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/documentation' ){
        return true;
      }
      else {
        return false;
      }
  }
}
