import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  imageObject = [
    {
      path: '../assets/project-1/1.jpg',
    },
    {
      path: '../assets/project-1/2.jpg',
    },
    {
      path: '../assets/project-1/3.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
