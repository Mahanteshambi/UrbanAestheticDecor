import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css'],
})
export class Project3Component implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: '../assets/project-3/1.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/2.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/3.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/4.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/5.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/6.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/7.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/8.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/9.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/10.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/11.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/12.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/13.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/14.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/15.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/16.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/17.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/18.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/19.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/20.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/21.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/22.jpg',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/23.jpg',
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
