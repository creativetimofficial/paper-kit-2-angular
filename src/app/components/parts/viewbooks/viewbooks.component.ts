import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'app/services/book.service';
// BookService

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  // constructor() { }
  constructor(private database: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  local
  id
  async ngOnInit() {
    this.id = await this.activatedRoute.snapshot.params.id
    console.log(this.id);
    this.local = await this.database.get(this.id).toPromise()
  }


}
