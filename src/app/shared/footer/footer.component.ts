import { Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {


    }

    isDocumentation(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ){
            return true;
        } else {
            return false;
        }
    }
}
