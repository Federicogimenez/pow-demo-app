import { Component, OnInit } from '@angular/core';

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
      entryFor: 200
    },
    {
      players: 6740,
      prize: 100.500,
      entryFor: 125
    },
    {
      players: 2300,
      prize: 80.000,
      entryFor: 90
    },
    {
      players: 10040,
      prize: 10.000,
      entryFor: 50
    },
    {
      players: 6000,
      prize: 25.000,
      entryFor: 70
    },
    {
      players: 7392,
      prize: 150.000,
      entryFor: 220
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
export interface GameData {
  players: number;
  prize: number;
  entryFor: number;
}