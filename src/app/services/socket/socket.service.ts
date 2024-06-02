// socket.service.ts

import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { AuthService } from '../auth/auth.service'; // Your authentication service
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket, private authService: AuthService) { }
 
  private isConnected = false;

  connect() {
    if (!this.isConnected) {
      const token = this.authService.getAuthToken(); // Get authorization token
      this.socket.ioSocket.io.opts.query = {
        token: token
      };
      this.socket.connect(); // Connect socket with authorization token
      this.isConnected = true;
    }
  }

  disconnect() {
    if (this.isConnected) {
      this.socket.disconnect(); // Disconnect socket
      this.isConnected = false;
    }
  }

  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data:any) => data));
  }
}
