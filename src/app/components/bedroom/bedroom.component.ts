import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css'],
})
export class BedroomComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/bedroom/1.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/2.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/3.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/4.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/5.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/6.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/7.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/10.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/11.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/12.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/13.JPG',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/14.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/15.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/16.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/17.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/18.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/19.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/20.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bedroom/21.jpg',
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
