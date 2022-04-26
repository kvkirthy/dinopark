import { Component, OnInit } from '@angular/core';
import { DinoAccessService } from './dino-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dinoClient: DinoAccessService){
  }

  ngOnInit(){
    this.dinoClient
      .getDinosaurs()
      .subscribe( r => console.table(r) );
  }
}
