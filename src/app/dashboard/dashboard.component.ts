import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket/socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  startSocketConnection() {
    this.socketService.connect(); // Start socket connection
    this.socketService.getMessage().subscribe((res)=>{
      console.log(res);
    });
  }

  stopSocketConnection() {
    this.socketService.disconnect(); // Stop socket connection
  }
}
