import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { EventBusArgs } from './models/event-bus-args';

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
