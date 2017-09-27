import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];

  constructor() { }

  ngOnInit() {
  }

}
