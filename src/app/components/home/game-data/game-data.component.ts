import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameData } from '../home.component';

@Component({
  selector: 'app-game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.scss']
})
export class GameDataComponent implements OnInit {

  constructor() { }

  @Input() public game: GameData = {
    players: 0,
    prize: 0,
    entryFor: 0,
    imgUrl: {},
    gameId: 0,
  };

  @Output() enviarId =  new EventEmitter<Number>();

  ngOnInit(): void {
  }


  public playGame(){
    this.enviarId.emit(this.game.gameId)
  }
}
