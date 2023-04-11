import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css'],
})
export class Project1Component implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/project-1/1.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/2.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/3.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/4.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/5.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/6.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/7.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/10.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/11.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/12.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/13.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/14.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/15.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/16.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/17.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/18.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/19.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/20.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/21.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/22.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/23.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/24.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/25.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-1/26.jpg',
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
