import { Injectable } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../fixtures/mock-heroes'; 
import { Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes!');
    return of(HEROES);
  }
}