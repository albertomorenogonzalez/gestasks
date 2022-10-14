import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonListService {
  public people: Person[] = [
    {
      id: 0,
      name: 'Lionel',
      surname: 'Messi',
      nick: 'GOAT',
      sex: 'male',
      photo: 'http://drive.google.com/uc?export=view&id=1SEmUpHG80RxAp9BClsm3ty79tGERwW0X'
    },
    {
      id: 1,
      name: 'Cristiano',
      surname: 'Ronaldo',
      nick: 'El Bicho',
      sex: 'male',
      photo: 'http://drive.google.com/uc?export=view&id=1Tq4buMu5VcycRMO4m4HcqYs4oShWYFFd'
    },
  ]

  constructor() { }

  public getPeople(): Person[] {
    return this.people;
  }

  public getPersonById(id: number): Person {
    return this.people[id];
  }
}
