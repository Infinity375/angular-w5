import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  timeLeft: number = 12;
  private interval: any;
  private alertHorText: String = "Неправилно пресичане!!";

  ngOnInit() {
    this.startTimer();
  }


  public startTimer() {
    this.interval = setInterval(() => {

      if (this.timeLeft > 0) {
        this.timeLeft--;

      } else {
        this.timeLeft = 12;
      }
      this.changeLightsHorizontal();
      this.changeLightsVertical();
      this.crossHorizontal();
      this.crossVertical();
    }, 1000);
  }
  public stopTimer() {
    clearInterval(this.interval);
  }

  public crossHorizontal() {
    const crossBtns = document.getElementsByClassName('crossHor');
    if (this.timeLeft >= 0 && this.timeLeft <= 7) {
      for (let i = 0; i < crossBtns.length; i++) {
        const crossBtn = crossBtns[i] as HTMLButtonElement;
        crossBtn.disabled = false;
      }
    } else {
      for (let i = 0; i < crossBtns.length; i++) {
        const crossBtn = crossBtns[i] as HTMLButtonElement;
        crossBtn.disabled = true;
      }
    }
  }
  public alertHorizontal() {
    if (this.timeLeft >= 5) {
      alert(this.alertHorText);
    }
  }

  public crossVertical() {
    const crossBtns = document.getElementsByClassName('crossVer');
    if (this.timeLeft >= 5 && this.timeLeft <= 12) {
      for (let i = 0; i < crossBtns.length; i++) {
        const crossBtn = crossBtns[i] as HTMLButtonElement;
        crossBtn.disabled = false;
      }
    } else {
      for (let i = 0; i < crossBtns.length; i++) {
        const crossBtn = crossBtns[i] as HTMLButtonElement;
        crossBtn.disabled = true;
      }
    }
  }
  public alertVertical() {
    if (this.timeLeft >= 5 && this.timeLeft <= 7) {
      alert(this.alertHorText);
    }
  }

  public changeLightsHorizontal() {
    if (this.timeLeft == 12) {
      const greenDivs = document.getElementsByClassName('greenHor');
      for (let i = 0; i < greenDivs.length; i++) {
        (greenDivs[i] as HTMLElement).style.background = '#00800080';
      }
      const redDivs = document.getElementsByClassName('redHor');
      for (let i = 0; i < redDivs.length; i++) {
        (redDivs[i] as HTMLElement).style.background = '#ff0000';
      }
    } else if (this.timeLeft == 7) {
      const redDivs = document.getElementsByClassName('redHor');
      for (let i = 0; i < redDivs.length; i++) {
        (redDivs[i] as HTMLElement).style.background = '#ff000080';
      }
      const yellowDivs = document.getElementsByClassName('yellowHor');
      for (let i = 0; i < yellowDivs.length; i++) {
        (yellowDivs[i] as HTMLElement).style.background = '#ffff00';
      }
    } else if (this.timeLeft == 5) {
      const yellowDivs = document.getElementsByClassName('yellowHor');
      for (let i = 0; i < yellowDivs.length; i++) {
        (yellowDivs[i] as HTMLElement).style.background = '#ffff0080';
      }
      const greenDivs = document.getElementsByClassName('greenHor');
      for (let i = 0; i < greenDivs.length; i++) {
        (greenDivs[i] as HTMLElement).style.background = '#008000';
      }
    }
  }

  public changeLightsVertical() {
    if (this.timeLeft == 12) {
      const greenDivs = document.getElementsByClassName('greenVer');
      for (let i = 0; i < greenDivs.length; i++) {
        (greenDivs[i] as HTMLElement).style.background = '#008000';
      }
      const redDivs = document.getElementsByClassName('redVer');
      for (let i = 0; i < redDivs.length; i++) {
        (redDivs[i] as HTMLElement).style.background = '#ff000080';
      }
    } else if (this.timeLeft == 7) {
      const greenDivs = document.getElementsByClassName('greenVer');
      for (let i = 0; i < greenDivs.length; i++) {
        (greenDivs[i] as HTMLElement).style.background = '#00800080';
      }
      const yellowDivs = document.getElementsByClassName('yellowVer');
      for (let i = 0; i < yellowDivs.length; i++) {
        (yellowDivs[i] as HTMLElement).style.background = '#ffff00';
      }
    } else if (this.timeLeft == 5) {
      const yellowDivs = document.getElementsByClassName('yellowVer');
      for (let i = 0; i < yellowDivs.length; i++) {
        (yellowDivs[i] as HTMLElement).style.background = '#ffff0080';
      }
      const redDivs = document.getElementsByClassName('redVer');
      for (let i = 0; i < redDivs.length; i++) {
        (redDivs[i] as HTMLElement).style.background = '#ff0000';
      }
    }
  }
  private ind: boolean = false;

  public changeColor() {
      const yellowDivsHor = document.getElementsByClassName('yellowHor');
      const yellowDivsVer = document.getElementsByClassName('yellowVer');
      if(!this.ind){
      for (let i = 0; i < yellowDivsHor.length; i++) {
        (yellowDivsHor[i] as HTMLElement).style.background = '#ffff00';
        (yellowDivsVer[i] as HTMLElement).style.background = '#ffff00';
      }
      this.ind=true;
    }  else{
      for (let i = 0; i < yellowDivsHor.length; i++) {
        (yellowDivsHor[i] as HTMLElement).style.background = '#ff580a';
        (yellowDivsVer[i] as HTMLElement).style.background = '#ff580a';
      }
      this.ind=false;
    }    
  }

  private problemInterval: any;
  private problemTime: number = 10;
  
  public problemTimer() {
    this.stopTimer();
    this.problemInterval = setInterval(() => {

      if (this.problemTime > 0) {
        this.problemTime--;
        this.changeColor();
      } else {
        this.problemStopTimer();
        this.startTimer();
        return;
      }
      
    }, 1000);
  }

  public problemStopTimer() {
    clearInterval(this.problemInterval);
  }
}
  
  /*private problemTime: number = 10;
  private problemInterval: any;

  public problem() {
    clearInterval(this.interval);
    this.timeLeft = 10;
    this.problemInterval = setInterval(() => {

      const yellowDivsHorAct = document.getElementsByClassName('yellowHor');
      for (let i = 0; i < yellowDivsHorAct.length; i++) {
        (yellowDivsHorAct[i] as HTMLElement).style.background = '#000';
        (yellowDivsHorAct[i] as HTMLElement).style.background = '#ff0';
      }
      const yellowDivsVerAct = document.getElementsByClassName('yellowVer');
      for (let i = 0; i < yellowDivsVerAct.length; i++) {
        setTimeout(() => {
          (yellowDivsVerAct[i] as HTMLElement).style.background = '#ffff00';
        }, i * 1000);

        setTimeout(() => {
          (yellowDivsVerAct[i] as HTMLElement).style.background = '#ff3d00';
        }, i * 1000);
      }

      this.timeLeft--;

    }, 1000);

  }

  private problemColors: Array<string> = ['#ff3d00', '#ffff00'];
  private currentColor: number = 0;
  private yellowDivsHor: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('yellowHor') as HTMLCollectionOf<HTMLElement>;
  yellowDivsHorAct = document.getElementsByClassName('yellowHor');

  public changeColor() {
    this.problemInterval = setInterval(() => {
    --this.currentColor;
    if (this.currentColor < 0) {
      this.currentColor = this.problemColors.length - 1;
      for (let i = 0; i < this.yellowDivsHorAct.length; i++) {
        (this.yellowDivsHorAct[i] as HTMLElement).style.background = this.problemColors[this.currentColor];
      }
    }
  }, 2000);*/



