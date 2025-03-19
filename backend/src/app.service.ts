import { Injectable } from '@nestjs/common';
import { Id } from '../../core/src/index';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + Id.gerar();
  }
}
