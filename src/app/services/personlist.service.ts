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
      photo: ''
    },
    {
      id: 1,
      name: 'Cristiano',
      surname: 'Ronaldo',
      nick: 'El Bicho',
      sex: 'male',
      photo: ''
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
