import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message: string;
  isSkip = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.message = `Hi, lovey!

    Happy birthday!!!
    I hope you enjoy your special day (yes, special don't payt me) and sana you treat it as special from now on. Sana nagustuhan mo din tong mini Among Us themed site na ginawa ko to greet you hahahaha.

    My birthday wish for you is that I wish you could find something that you really wanna do and something that you really enjoy. I wish you keep on working on yourself and I hope you never give up on doing that. It's what we do. We keep improving for the better.

    Remember that I always love you and I will always support whatever you wanna do (as long as it's not illegal hahahaha). Keep slaying on the things that you do and I hope you find the best version of yourself. I love you so much!!

    Oh and I hope you like the gift that I sent. Sana magamit mo and maenjoy mo hehe. The jacket is mine pero di ko siya nalabhan sorry hehehehehe.

    Anyway, I hope you have fun and you stay healthy. I'm proud of you, love. Ingat ka lagi on the frontlines!

    - Marki

    P.S. Here is a 12 min video of me doing the mini application if you wanna watch it hehe. Just copy and paste the link in another tab.
    https://youtu.be/By7TjaOD-_U

    (Skip vote to proceed)
    `;
  }

  skipVote(): void {
    this.isSkip = true;
  }

  noSkip(): void {
    this.isSkip = false;
  }

  skip(): void {
    this.router.navigate([ '/happy-birthday-lira' ]);
  }
}
