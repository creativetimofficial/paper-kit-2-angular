import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [`
   ngb-progressbar {
     margin-top: 5rem;
   }
 `]
})
export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    date: {year: number, month: number};
    model: NgbDateStruct;

     isWeekend(date: NgbDateStruct) {
       const d = new Date(date.year, date.month - 1, date.day);
       return d.getDay() === 0 || d.getDay() === 6;
     }

     isDisabled(date: NgbDateStruct, current: {month: number}) {
       return date.month !== current.month;
     }

  ngOnInit() {
  }

}
