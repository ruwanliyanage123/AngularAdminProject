import { RANKINGS } from './mock-ranking';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor() { }

  public getRankingData(): any {
    return RANKINGS;
  }
}
