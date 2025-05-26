import { PingResponse } from '../interfaces/ping-response.interface';

export class PingService {
  getPingMessage(): PingResponse {
    return { message: 'pong' };
  }
}
