import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  allImages = [
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    },
    {
      category: 'Shoes',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      category: 'Electronics',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
    {
      category: 'Shoes',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    },
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    },
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    },
    {
      category: 'Electronics',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    },
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
    },
    {
      category: 'Gaming',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
    },
    {
      category: 'Bags',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
    },
  ];
  currentGallery = this.allImages;
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

  updateGallery(category: string) {
    if (category === 'all-categories') {
      this.currentGallery = this.all;
    }
    if (category === 'bags') {
      this.currentGallery = this.bags;
    }
    if (category === 'shoes') {
      this.currentGallery = this.shoes;
    }
    if (category === 'gaming') {
      this.currentGallery = this.gaming;
    }
    if (category === 'electronics') {
      this.currentGallery = this.electroincs;
      console.log(this.currentGallery);
    }
  }
}
