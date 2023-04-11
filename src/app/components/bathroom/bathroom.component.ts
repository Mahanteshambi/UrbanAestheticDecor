import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css'],
})
export class BathroomComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/bathroom/1.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bathroom/2.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bathroom/3.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bathroom/4.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/bathroom/5.jpg',
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
