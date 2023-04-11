import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tvunit',
  templateUrl: './tvunit.component.html',
  styleUrls: ['./tvunit.component.css'],
})
export class TvunitComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/tv-unit/1.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/2.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/3.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/4.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/5.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/6.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/7.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/tv-unit/9.jpg',
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
