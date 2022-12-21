import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    const canISayHello = this._getRandomNumber(1, 10) > 5; 
    console.log(canISayHello); 
    if (!canISayHello) return; 
    return 'Hello World!';
  }

  private  _getRandomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
