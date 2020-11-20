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
    this.message = ``;
  }

  skipVote(): void {
    this.isSkip = true;
  }

  noSkip(): void {
    this.isSkip = false;
  }

  skip(): void {
    this.router.navigate([ '/emergency' ]);
  }
}
