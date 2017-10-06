import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {
        if($('.twitter-sharrre').length != 0){
           $('.twitter-sharrre').sharrre({
             share: {
               twitter: true
             },
             enableHover: false,
             enableTracking: true,
             enableCounter: false,
             buttons: { twitter: {via: 'CreativeTim'}},
             click: function(api, options){
               api.simulateClick();
               api.openPopup('twitter');
             },
             template: '<i class="fa fa-twitter"></i>',
             url: 'http://pk2-angular.creative-tim.com/'
           });
       }

       if($('.twitter-sharrre-nav').length != 0){
           $('.twitter-sharrre-nav').sharrre({
             share: {
               twitter: true
             },
             enableHover: false,
             enableTracking: true,
             enableCounter: false,
             buttons: { twitter: {via: 'CreativeTim'}},
             click: function(api, options){
               api.simulateClick();
               api.openPopup('twitter');
             },
             template: '<i class="fa fa-twitter"></i><p class="hidden-lg-up">Twitter</p>',
             url: 'http://pk2-angular.creative-tim.com/'
           });
       }

       if($('.facebook-sharrre').length != 0){
           $('.facebook-sharrre').sharrre({
             share: {
               facebook: true
             },
             enableHover: false,
             enableTracking: true,
             enableCounter: false,
             click: function(api, options){
               api.simulateClick();
               api.openPopup('facebook');
             },
             template: '<i class="fa fa-facebook-square"></i>',
             url: 'http://pk2-angular.creative-tim.com/'
           });
       }

       if($('.facebook-sharrre-nav').length != 0){
           $('.facebook-sharrre-nav').sharrre({
             share: {
               facebook: true
             },
             enableHover: false,
             enableTracking: true,
             enableCounter: false,
             click: function(api, options){
               api.simulateClick();
               api.openPopup('facebook');
             },
             template: '<i class="fa fa-facebook-square"></i><p class="hidden-lg-up">Facebook</p>',
             url: 'http://pk2-angular.creative-tim.com/'
           });
       }

       if($('.google-sharrre').length != 0){
           $('.google-sharrre').sharrre({
             share: {
               googlePlus: true
             },
             enableCounter: false,
             enableHover: false,
             enableTracking: true,
             click: function(api, options){
               api.simulateClick();
               api.openPopup('googlePlus');
             },
             template: '<i class="fa fa-google"></i>',
             url: 'http://pk2-angular.creative-tim.com/'
           });
       }

       if($('.google-sharrre-nav').length != 0){
           $('.google-sharrre-nav').sharrre({
             share: {
               googlePlus: true
             },
             enableCounter: false,
             enableHover: false,
             enableTracking: true,
             click: function(api, options){
               api.simulateClick();
               api.openPopup('googlePlus');
             },
             template: '<i class="fa fa-google"></i><p class="hidden-lg-up">Google</p>',
             url: 'http://pk2-angular.creative-tim.com/'
           });
       }
    }
}
