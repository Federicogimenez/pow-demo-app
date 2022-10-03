import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { doAction } from './home-facade.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gameDataArray: GameData[] = [
    {
      players: 8000,
      prize: 126.000,
      entryFor: 200,
      imgUrl: {backgroundImage: "url(./../../../assets/img1.png)"},
      gameId: 8,
    },
    {
      players: 6740,
      prize: 100.500,
      entryFor: 125,
      imgUrl: {backgroundImage: "url(./../../../assets/img2.png)"},
      gameId: 1,
    },
    {
      players: 2300,
      prize: 80.000,
      entryFor: 90,
      imgUrl: {backgroundImage: "url(./../../../assets/img3.png)"},
      gameId: 7,
    },
    {
      players: 10040,
      prize: 10.000,
      entryFor: 50,
      imgUrl: {backgroundImage: "url(./../../../assets/img4.png)"},
      gameId: 8,
    },
    {
      players: 6000,
      prize: 25.000,
      entryFor: 70,
      imgUrl: {backgroundImage: "url(./../../../assets/img5.png)"},
      gameId: 8,
    },
    {
      players: 7392,
      prize: 150.000,
      entryFor: 220,
      imgUrl: {backgroundImage: "url(./../../../assets/img6.png)"},
      gameId: 8,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  protected playGame(id:any){
    doAction(id);
  }


}


export interface GameData {
  players: number;
  prize: number;
  entryFor: number;
  imgUrl: {};
  gameId: number;
}