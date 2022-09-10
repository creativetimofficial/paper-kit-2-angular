import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/services/book.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  constructor(private booksdb: BookService) { }
  books
  // books: any[] = [
  //   { "index": 0, "author": "Saideep", "book": "Rape Nanking", "image": "https://www.basicbooks.com/wp-content/uploads/2017/06/9780465068364.jpg?fit=1732%2C2600" },
  //   { "index": 1, "author": "Karthik", "book": "Who Moved My Cheese", "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPxMPUzwH-0cUd154h-lKCz0iTWlATwk9xPGfd6pBBK6FeXGCi" },
  //   { "index": 2, "author": "Kiran", "book": "Mateverse", "image": "https://images-na.ssl-images-amazon.com/images/I/91ktfa+F-TL.jpg" },
  //   // { "index": 3, "author": "البخاري", "book": "صحيح البخاري", "image": "https://images-na.ssl-images-amazon.com/images/I/A1oIk7OsCmL.jpg" },
  //   // { "index": 4, "author": "حفص بن عاصم", "book": "القران الكريم", "image": "http://www.truth-seeker.info/wp-content/uploads/2012/10/noble-quran.jpg" },
  // ];
  async ngOnInit() {
    this.books = await this.booksdb.getbooks().toPromise()
  }
  // anime({
  //   targets: '.line-drawing-demo .lines path',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   easing: 'easeInOutSine',
  //   duration: 1500,
  //   delay: function(el, i) { return i * 250 },
  //   direction: 'alternate',
  //   loop: true
  // });

}
