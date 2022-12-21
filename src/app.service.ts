import { Injectable, MessageEvent } from '@nestjs/common';

@Injectable()
export class AppService {

  getExtraction(): MessageEvent {
    let numberRoulette = this._getRandomNumber(1, 99);
    if (numberRoulette < 20) return; 
    return { data: numberRoulette.toString() };
  }

  private _getRandomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
