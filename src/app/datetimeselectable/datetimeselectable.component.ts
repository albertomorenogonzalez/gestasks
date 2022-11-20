import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { DEFAULT_LANGUAGE } from '@ngx-translate/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { AssignmentsService } from '../services/assignments.service';

export const DATE_TIME_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-datetimeselectable',
  templateUrl: './datetimeselectable.component.html',
  styleUrls: ['./datetimeselectable.component.scss'],
  providers:[DATE_TIME_VALUE_ACCESSOR]
})
export class DateTimeSelectableComponent implements OnInit, ControlValueAccessor, OnDestroy {
  hasValue = false;

  constructor(
    private data:AssignmentsService
  ) { }

  ngOnDestroy(): void {
    this.dateSubject.complete()
  }

  private dateSubject = new BehaviorSubject(this.formatDate(moment()))
  public date$ = this.dateSubject.asObservable();
  propagateChange = (_: any) => { }

  isDisabled:boolean = false;

  formatDate(date:moment.Moment){
    return date.format('YYYY-MM-DDTHH:mmZ');
  }

  ngOnInit() {}

  writeValue(obj: any): void {
    if(obj){
      this.hasValue = true;
      this.dateSubject.next(this.formatDate(moment(obj)));
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onDateTimeChanged(event, accordion:IonAccordionGroup){
    setTimeout(() => {
    var value = this.formatDate(moment(event.detail.value));
    if(value!=this.dateSubject.getValue())
      {
        this.hasValue = true;

        this.dateSubject.next(value);

        accordion.value = '';
        this.propagateChange(value);
      }

    }, 100);
  }

  onCancel(datetime:IonDatetime, accordion:IonAccordionGroup){
    datetime.cancel();
    accordion.value='';
  }

  onConfirm(datetime:IonDatetime, accordion:IonAccordionGroup){
    datetime.confirm();
  }
}

