import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonListService } from 'src/app/services/personlist.service';
@Component({
  selector: 'app-gestpeople',
  templateUrl: './gestpeople.page.html',
  styleUrls: ['./gestpeople.page.scss'],
})
export class GestpeoplePage implements OnInit {

  constructor(private data: PersonListService) { }

  getPeople(): Person[] {
    return this.data.getPeople();
  }

  ngOnInit() {
  }

}
