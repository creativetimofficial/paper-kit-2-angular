import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service'
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup, Validators,
} from '@angular/forms'
import { BookService } from 'app/services/book.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
    private router: Router, private database: BookService, private activatedRoute: ActivatedRoute, private usersservice: UsersService) { }
  order
  id
  db
  local
  async ngOnInit() {
    this.id = await this.activatedRoute.snapshot.params.id
    console.log(this.id);
    this.local = await this.database.get(this.id).toPromise()
    console.log(JSON.stringify(this.local[0]));
    this.order = this.formbuilder.group({

      price: [JSON.stringify(this.local[0].price)],
      title: [this.local[0].title],
      email: ['', Validators.required],
      // type: ['', Validators.required],
      name: ['', Validators.required],
      xaafad: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      // password: ['', Validators.required],
    });




  }

  async neworder(data) {

    this.db = await this.usersservice.postuser(data.value).toPromise()
    // console.log(this.db);
    console.log('this data.value ' + JSON.stringify(data.value));
    // console.log('this data.value ' + data);
  }
  // test() {
  //   console.log('blabalc');
  //   alert('this alert works')
  // }

}
