import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-livingRoom',
  templateUrl: './livingRoom.component.html',
  styleUrls: ['./livingRoom.component.css'],
})
export class LivingRoomComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/living-room/1.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/2.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/3.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/4.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/5.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/6.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/7.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/10.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/11.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/12.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/13.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/14.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/15.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/16.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/17.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/18.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/19.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/living-room/20.jpg',
    },
  ];
  currentGallery = this.allImages;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
