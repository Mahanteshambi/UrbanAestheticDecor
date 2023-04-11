import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  allImages = [
    {
      category: 'Bedroom',
      src: '../assets/bedroom/3.JPG',
      link: '/bedroom',
    },
    {
      category: 'Kitchen',
      src: '../assets/kitchen/4.JPG',
      link: '/kitchen',
    },
    {
      category: 'TV Unit',
      src: '../assets/tv-unit/1.JPG',
      link: 'tv-unit',
    },
    {
      category: 'Living Room',
      src: '../assets/living-room/8.jpg',
      link: '/living-room',
    },
    {
      category: 'Bathroom',
      src: '../assets/bathroom/4.jpg',
      link: '/bathroom',
    },
    {
      category: 'Wardrobe',
      src: '../assets/wardrobe/3.jpg',
      link: '/wardrobe',
    },
  ];
  currentCategory = this.allImages;
  all = this.allImages;

  electroincs = this.allImages.filter(function (item) {
    return item.category === 'Electronics';
  });
  gaming = this.allImages.filter(function (item) {
    return item.category === 'Gaming';
  });
  shoes = this.allImages.filter(function (item) {
    return item.category === 'Shoes';
  });
  bags = this.allImages.filter(function (item) {
    return item.category === 'Bags';
  });

  constructor() {}

  ngOnInit(): void {}

  // updateGallery(category: string) {
  //   if (category === 'all-categories') {
  //     this.currentGallery = this.all;
  //   }
  //   if (category === 'bags') {
  //     this.currentGallery = this.bags;
  //   }
  //   if (category === 'shoes') {
  //     this.currentGallery = this.shoes;
  //   }
  //   if (category === 'gaming') {
  //     this.currentGallery = this.gaming;
  //   }
  //   if (category === 'electronics') {
  //     this.currentGallery = this.electroincs;
  //     console.log(this.currentGallery);
  //   }
  // }
}
