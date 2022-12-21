import { Controller, MessageEvent, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Sse('extractionSSE')
  extractionSSE(): Observable<MessageEvent> {
    return interval(4000).pipe(map((_) => this.appService.getExtraction()))
  } 
}
