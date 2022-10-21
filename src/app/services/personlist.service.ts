import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonListService {
  private _people: Person[] = [
    {
      id: 1,
      name: 'Lionel',
      surname: 'Messi',
      nick: 'GOAT',
      sex: 'male',
      photo: 'http://drive.google.com/uc?export=view&id=16JOSGpUKnBVn12RjoaloD-8lXAKdnOkE'
    },
    {
      id: 2,
      name: 'Cristiano',
      surname: 'Ronaldo',
      nick: 'El Bicho',
      sex: 'male',
      photo: 'http://drive.google.com/uc?export=view&id=1xM39mOtZFzHe1LkSBoCXTsJMPVWo8s-m'
    },
    {
      id: 3,
      name: 'Alberto',
      surname: 'Moreno',
      nick: 'Albmg11',
      sex: 'male',
      photo: 'http://drive.google.com/uc?export=view&id=1Gbxra57Jf0kDzqMd9sK2ksXI9K-TUIRk'
    },
    {
      id: 4,
      name: 'Juan Antonio',
      surname: 'Aranda',
      nick: 'Galnio',
      sex: 'male',
      photo: 'http://drive.google.com/uc?export=view&id=1tqvd0kdOyuAEm4PdU_97-lay83DUBZt1'
    },
  ]

  id:number = this._people.length+1;
  constructor() {

  }

  getPeople(){
    return this._people;
  }

  getPersonById(id:number){
    return this._people.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }

  addPerson(person:Person){
    person.id = this.id++;
    this._people.push(person);
  }

  updatePerson(person:Person){
    var _person = this._people.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.surname = person.surname;
      _person.nick = person.nick;
      _person.sex = person.sex;
      _person.photo = person.photo;
    }
    
  }
}
