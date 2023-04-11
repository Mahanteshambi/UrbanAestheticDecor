import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css'],
})
export class WardrobeComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/wardrobe/1.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/2.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/3.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/4.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/5.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/6.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/7.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/10.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/wardrobe/11.jpg',
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
