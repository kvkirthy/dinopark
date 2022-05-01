import { Component, OnInit } from '@angular/core';
import { DinoAccessService } from '../dino-access.service';

@Component({
  selector: 'dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.css']
})
export class DinoListComponent implements OnInit {

  title = "";
  pronunciation = "";
  dinoDiet = "";
  dinoLength = "";
  dinoPeriod = "";
  mya = "";
  info = "";
  dinoImage = "";

  dinoList: Array< {
    "id": number,
    "name": string,
    "pronunciation": string,
    "meaningOfName": string,
    "diet": string,
    "length": string,
    "period": string,
    "mya": string,
    "info": string,
    imagePath? : string
}> = [];

  constructor(private dinoClient: DinoAccessService) { }

  ngOnInit(): void {
    this.dinoClient
    .getDinosaurs()
    .subscribe( r => {
      this.dinoList = r.slice(0,10);
      this.dinoList.forEach( d => d.imagePath = `/assets/${d.name}.png`)
      console.table(this.dinoList);
    }  );
  }

  selectDino(dino : {
    "id": number,
    "name": string,
    "pronunciation": string,
    "meaningOfName": string,
    "diet": string,
    "length": string,
    "period": string,
    "mya": string,
    "info": string,
    imagePath? : string
}){
  this.title = dino.name;
  this.pronunciation = dino.pronunciation;
  this.dinoDiet = dino.diet;
  this.dinoLength = dino.length;
  this.dinoPeriod = dino.period;
  this.mya = dino.mya;
  this.info = dino.info;
  this.dinoImage = dino.imagePath || '';

  }

}
