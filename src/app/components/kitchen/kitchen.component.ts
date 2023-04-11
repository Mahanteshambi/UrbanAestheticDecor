import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/kitchen/1.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/2.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/3.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/4.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/5.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/6.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/7.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/kitchen/10.jpg',
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
