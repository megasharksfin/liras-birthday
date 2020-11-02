import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss'],
})
export class EmergencyComponent implements OnInit {
  isClicked = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  emergencyClick(): void {
    this.isClicked = true;

    const audio = new Audio();
    audio.src = 'assets/emergency.wav';
    audio.load();
    audio.play();

    setTimeout(() => {
      this.isClicked = false;
      this.router.navigate([ '/message' ]);
    }, 3000);
  }

}
