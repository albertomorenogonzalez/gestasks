import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonListService {
  getPeople(): Person[] {
    throw new Error('Method not implemented.');
  }
  public people: Person[] = [
    {
      id: 0,
      name: 'Lionel',
      surname: 'Messi',
      nick: 'GOAT',
      sex: 'male',
      photo: ''
    },
  ]

  constructor() { }

  public getPerson(): Person[] {
    return this.people;
  }

  public getPersonById(id: number): Person {
    return this.people[id];
  }
}
