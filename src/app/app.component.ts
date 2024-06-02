import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular';

  constructor(private socketService: SocketService){}

  ngOnInit(): void {
    // this.socketService.getMessage().subscribe((data)=>{
    //   console.log(data);
    // });
  }



}
