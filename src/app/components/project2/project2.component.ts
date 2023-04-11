import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css'],
})
export class Project2Component implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/project-2/1.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/2.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/3.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/4.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/5.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/6.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/7.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/10.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/11.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/12.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/13.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/14.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/15.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/16.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-2/17.jpg',
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
