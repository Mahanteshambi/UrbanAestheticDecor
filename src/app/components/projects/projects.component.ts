import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      category: 'Bags',
      src: '../assets/project-1/25.jpg',
      title: 'Project 1',
      link: '/project-1',
    },
    {
      category: 'Shoes',
      src: '../assets/project-2/13.jpg',
      title: 'Project 2',
      link: '/project-2',
    },
    {
      category: 'Bags',
      src: '../assets/project-3/9.jpg',
      title: 'Project 3',
      link: '/project-3',
    },
  ];
  currentProjects = this.projects;

  constructor() {}

  ngOnInit(): void {}
}
