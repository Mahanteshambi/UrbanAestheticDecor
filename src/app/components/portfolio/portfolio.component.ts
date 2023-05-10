import { Component, OnInit } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from '@ngx-gallery/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  // @ts-ignore
  project_one: GalleryItem[];
  // @ts-ignore
  project_two: GalleryItem[];
  // @ts-ignore
  project_three: GalleryItem[];
  // @ts-ignore
  bedroom: GalleryItem[];
  // @ts-ignore
  kitchen: GalleryItem[];
  // @ts-ignore
  tv_unit: GalleryItem[];
  // @ts-ignore
  bathroom: GalleryItem[];
  // @ts-ignore
  living_room: GalleryItem[];
  // @ts-ignore
  wardobe: GalleryItem[];

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // 1. Create gallery project_one
    this.project_one = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.project_two = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.project_three = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.bedroom = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.kitchen = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.tv_unit = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.living_room = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.bathroom = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.wardobe = galleryInit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    // Load item into different lightbox instance
    // With custom gallery config
    // this.withCustomGalleryConfig();
  }

  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {
    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef1 = this.gallery.ref('p1');
    const lightboxGalleryRef2 = this.gallery.ref('p2');
    const lightboxGalleryRef3 = this.gallery.ref('p3');
    const lightboxGalleryRef4 = this.gallery.ref('bedroom');
    const lightboxGalleryRef5 = this.gallery.ref('kitchen');
    const lightboxGalleryRef6 = this.gallery.ref('tv-unit');
    const lightboxGalleryRef7 = this.gallery.ref('living-room');
    const lightboxGalleryRef8 = this.gallery.ref('bathroom');
    const lightboxGalleryRef9 = this.gallery.ref('wardobe');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef1.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef2.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef3.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef4.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef5.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef6.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef7.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef8.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef9.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
    });

    // 3. Load the project_one into the lightbox
    lightboxGalleryRef1.load(this.project_one);
    lightboxGalleryRef2.load(this.project_two);
    lightboxGalleryRef3.load(this.project_three);
    lightboxGalleryRef4.load(this.bedroom);
    lightboxGalleryRef5.load(this.kitchen);
    lightboxGalleryRef6.load(this.tv_unit);
    lightboxGalleryRef7.load(this.living_room);
    lightboxGalleryRef8.load(this.bathroom);
    lightboxGalleryRef9.load(this.wardobe);
  }

  showp1() {
    this.project_one = project_one.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();
    // @ts-ignore
    // document.getElementById('p1').hidden = true;
    // @ts-ignore
    document.getElementById('p1').click();
  }

  showp2() {
    this.project_two = project_two.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('p2').hidden = true;
    // @ts-ignore
    document.getElementById('p2').click();
  }

  showp3() {
    this.project_three = project_three.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('p3').hidden = true;
    // @ts-ignore
    document.getElementById('p3').click();
  }

  showBedroom() {
    this.bedroom = bedroom.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('bedroom').hidden = true;
    // @ts-ignore
    document.getElementById('bedroom').click();
  }

  showKitchen() {
    this.kitchen = kitchen.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('kitchen').hidden = true;
    // @ts-ignore
    document.getElementById('kitchen').click();
  }

  showTvUnit() {
    this.tv_unit = tv_unit.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('tv-unit').hidden = true;
    // @ts-ignore
    document.getElementById('tv-unit').click();
  }

  showLivingRoom() {
    this.living_room = living_room.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('living-room').hidden = true;
    // @ts-ignore
    document.getElementById('living-room').click();
  }

  showBathroom() {
    this.bathroom = bathroom.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('bathroom').hidden = true;
    // @ts-ignore
    document.getElementById('bathroom').click();
  }

  showWardobe() {
    this.wardobe = wardobe.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.withCustomGalleryConfig();

    // @ts-ignore
    document.getElementById('wardobe').hidden = true;
    // @ts-ignore
    document.getElementById('wardobe').click();
  }
}

const galleryInit = [
  {
    srcUrl: '../../../assets/project-1/1.jpg',
    previewUrl: '../../../assets/project-1/1.jpg',
  },
];

const project_one = [
  {
    srcUrl: '../../../assets/project-1/1.jpg',
    previewUrl: '../../../assets/project-1/1.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/2.jpg',
    previewUrl: '../../../assets/project-1/2.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/3.jpg',
    previewUrl: '../../../assets/project-1/3.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/4.jpg',
    previewUrl: '../../../assets/project-1/4.jpg',
  },

  {
    srcUrl: '../../../assets/project-1/5.jpg',
    previewUrl: '../../../assets/project-1/5.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/6.jpg',
    previewUrl: '../../../assets/project-1/6.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/7.jpg',
    previewUrl: '../../../assets/project-1/7.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/8.jpg',
    previewUrl: '../../../assets/project-1/8.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/9.jpg',
    previewUrl: '../../../assets/project-1/9.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/10.jpg',
    previewUrl: '../../../assets/project-1/10.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/11.jpg',
    previewUrl: '../../../assets/project-1/11.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/12.jpg',
    previewUrl: '../../../assets/project-1/12.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/13.jpg',
    previewUrl: '../../../assets/project-1/13.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/14.jpg',
    previewUrl: '../../../assets/project-1/14.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/15.jpg',
    previewUrl: '../../../assets/project-1/15.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/16.jpg',
    previewUrl: '../../../assets/project-1/16.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/17.jpg',
    previewUrl: '../../../assets/project-1/17.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/18.jpg',
    previewUrl: '../../../assets/project-1/18.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/19.jpg',
    previewUrl: '../../../assets/project-1/19.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/20.jpg',
    previewUrl: '../../../assets/project-1/20.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/21.jpg',
    previewUrl: '../../../assets/project-1/21.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/22.jpg',
    previewUrl: '../../../assets/project-1/22.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/23.jpg',
    previewUrl: '../../../assets/project-1/23.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/24.jpg',
    previewUrl: '../../../assets/project-1/24.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/25.jpg',
    previewUrl: '../../../assets/project-1/25.jpg',
  },
  {
    srcUrl: '../../../assets/project-1/26.jpg',
    previewUrl: '../../../assets/project-1/26.jpg',
  },
];

const project_two = [
  {
    srcUrl: '../../../assets/project-2/1.jpg',
    previewUrl: '../../../assets/project-2/1.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/2.jpg',
    previewUrl: '../../../assets/project-2/2.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/3.jpg',
    previewUrl: '../../../assets/project-2/3.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/4.jpg',
    previewUrl: '../../../assets/project-2/4.jpg',
  },

  {
    srcUrl: '../../../assets/project-2/5.jpg',
    previewUrl: '../../../assets/project-2/5.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/6.jpg',
    previewUrl: '../../../assets/project-2/6.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/7.jpg',
    previewUrl: '../../../assets/project-2/7.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/8.jpg',
    previewUrl: '../../../assets/project-2/8.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/9.jpg',
    previewUrl: '../../../assets/project-2/9.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/10.jpg',
    previewUrl: '../../../assets/project-2/10.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/11.jpg',
    previewUrl: '../../../assets/project-2/11.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/12.jpg',
    previewUrl: '../../../assets/project-2/12.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/13.jpg',
    previewUrl: '../../../assets/project-2/13.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/14.jpg',
    previewUrl: '../../../assets/project-2/14.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/15.jpg',
    previewUrl: '../../../assets/project-2/15.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/16.jpg',
    previewUrl: '../../../assets/project-2/16.jpg',
  },
  {
    srcUrl: '../../../assets/project-2/17.jpg',
    previewUrl: '../../../assets/project-2/17.jpg',
  },
];

const project_three = [
  {
    srcUrl: '../../../assets/project-3/1.jpg',
    previewUrl: '../../../assets/project-3/1.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/2.jpg',
    previewUrl: '../../../assets/project-3/2.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/3.jpg',
    previewUrl: '../../../assets/project-3/3.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/4.jpg',
    previewUrl: '../../../assets/project-3/4.jpg',
  },

  {
    srcUrl: '../../../assets/project-3/5.jpg',
    previewUrl: '../../../assets/project-3/5.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/6.jpg',
    previewUrl: '../../../assets/project-3/6.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/7.jpg',
    previewUrl: '../../../assets/project-3/7.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/8.jpg',
    previewUrl: '../../../assets/project-3/8.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/9.jpg',
    previewUrl: '../../../assets/project-3/9.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/10.jpg',
    previewUrl: '../../../assets/project-3/10.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/11.jpg',
    previewUrl: '../../../assets/project-3/11.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/12.jpg',
    previewUrl: '../../../assets/project-3/12.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/13.jpg',
    previewUrl: '../../../assets/project-3/13.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/14.jpg',
    previewUrl: '../../../assets/project-3/14.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/15.jpg',
    previewUrl: '../../../assets/project-3/15.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/16.jpg',
    previewUrl: '../../../assets/project-3/16.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/17.jpg',
    previewUrl: '../../../assets/project-3/17.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/18.jpg',
    previewUrl: '../../../assets/project-3/18.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/19.jpg',
    previewUrl: '../../../assets/project-3/19.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/20.jpg',
    previewUrl: '../../../assets/project-3/20.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/21.jpg',
    previewUrl: '../../../assets/project-3/21.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/22.jpg',
    previewUrl: '../../../assets/project-3/22.jpg',
  },
  {
    srcUrl: '../../../assets/project-3/23.jpg',
    previewUrl: '../../../assets/project-3/23.jpg',
  },
];

const bedroom = [
  {
    srcUrl: '../../../assets/bedroom/1.jpg',
    previewUrl: '../../../assets/bedroom/1.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/2.jpg',
    previewUrl: '../../../assets/bedroom/2.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/3.jpg',
    previewUrl: '../../../assets/bedroom/3.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/4.jpg',
    previewUrl: '../../../assets/bedroom/4.jpg',
  },

  {
    srcUrl: '../../../assets/bedroom/5.jpg',
    previewUrl: '../../../assets/bedroom/5.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/6.jpg',
    previewUrl: '../../../assets/bedroom/6.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/7.jpg',
    previewUrl: '../../../assets/bedroom/7.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/8.jpg',
    previewUrl: '../../../assets/bedroom/8.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/9.jpg',
    previewUrl: '../../../assets/bedroom/9.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/10.jpg',
    previewUrl: '../../../assets/bedroom/10.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/11.jpg',
    previewUrl: '../../../assets/bedroom/11.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/12.jpg',
    previewUrl: '../../../assets/bedroom/12.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/13.jpg',
    previewUrl: '../../../assets/bedroom/13.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/14.jpg',
    previewUrl: '../../../assets/bedroom/14.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/15.jpg',
    previewUrl: '../../../assets/bedroom/15.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/16.jpg',
    previewUrl: '../../../assets/bedroom/16.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/17.jpg',
    previewUrl: '../../../assets/bedroom/17.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/18.jpg',
    previewUrl: '../../../assets/bedroom/18.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/19.jpg',
    previewUrl: '../../../assets/bedroom/19.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/20.jpg',
    previewUrl: '../../../assets/bedroom/20.jpg',
  },
  {
    srcUrl: '../../../assets/bedroom/21.jpg',
    previewUrl: '../../../assets/bedroom/21.jpg',
  },
];

const kitchen = [
  {
    srcUrl: '../../../assets/kitchen/1.jpg',
    previewUrl: '../../../assets/kitchen/1.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/2.jpg',
    previewUrl: '../../../assets/kitchen/2.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/3.jpg',
    previewUrl: '../../../assets/kitchen/3.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/4.jpg',
    previewUrl: '../../../assets/kitchen/4.jpg',
  },

  {
    srcUrl: '../../../assets/kitchen/5.jpg',
    previewUrl: '../../../assets/kitchen/5.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/6.jpg',
    previewUrl: '../../../assets/kitchen/6.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/7.jpg',
    previewUrl: '../../../assets/kitchen/7.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/8.jpg',
    previewUrl: '../../../assets/kitchen/8.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/9.jpg',
    previewUrl: '../../../assets/kitchen/9.jpg',
  },
  {
    srcUrl: '../../../assets/kitchen/10.jpg',
    previewUrl: '../../../assets/kitchen/10.jpg',
  },
];

const tv_unit = [
  {
    srcUrl: '../../../assets/tv-unit/1.jpg',
    previewUrl: '../../../assets/tv-unit/1.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/2.jpg',
    previewUrl: '../../../assets/tv-unit/2.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/3.jpg',
    previewUrl: '../../../assets/tv-unit/3.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/4.jpg',
    previewUrl: '../../../assets/tv-unit/4.jpg',
  },

  {
    srcUrl: '../../../assets/tv-unit/5.jpg',
    previewUrl: '../../../assets/tv-unit/5.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/6.jpg',
    previewUrl: '../../../assets/tv-unit/6.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/7.jpg',
    previewUrl: '../../../assets/tv-unit/7.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/8.jpg',
    previewUrl: '../../../assets/tv-unit/8.jpg',
  },
  {
    srcUrl: '../../../assets/tv-unit/9.jpg',
    previewUrl: '../../../assets/tv-unit/9.jpg',
  },
];

const living_room = [
  {
    srcUrl: '../../../assets/living-room/1.jpg',
    previewUrl: '../../../assets/living-room/1.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/2.jpg',
    previewUrl: '../../../assets/living-room/2.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/3.jpg',
    previewUrl: '../../../assets/living-room/3.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/4.jpg',
    previewUrl: '../../../assets/living-room/4.jpg',
  },

  {
    srcUrl: '../../../assets/living-room/5.jpg',
    previewUrl: '../../../assets/living-room/5.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/6.jpg',
    previewUrl: '../../../assets/living-room/6.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/7.jpg',
    previewUrl: '../../../assets/living-room/7.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/8.jpg',
    previewUrl: '../../../assets/living-room/8.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/9.jpg',
    previewUrl: '../../../assets/living-room/9.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/10.jpg',
    previewUrl: '../../../assets/living-room/10.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/11.jpg',
    previewUrl: '../../../assets/living-room/11.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/12.jpg',
    previewUrl: '../../../assets/living-room/12.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/13.jpg',
    previewUrl: '../../../assets/living-room/13.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/14.jpg',
    previewUrl: '../../../assets/living-room/14.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/15.jpg',
    previewUrl: '../../../assets/living-room/15.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/16.jpg',
    previewUrl: '../../../assets/living-room/16.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/17.jpg',
    previewUrl: '../../../assets/living-room/17.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/18.jpg',
    previewUrl: '../../../assets/living-room/18.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/19.jpg',
    previewUrl: '../../../assets/living-room/19.jpg',
  },
  {
    srcUrl: '../../../assets/living-room/20.jpg',
    previewUrl: '../../../assets/living-room/20.jpg',
  },
];

const bathroom = [
  {
    srcUrl: '../../../assets/bathroom/1.jpg',
    previewUrl: '../../../assets/bathroom/1.jpg',
  },
  {
    srcUrl: '../../../assets/bathroom/2.jpg',
    previewUrl: '../../../assets/bathroom/2.jpg',
  },
  {
    srcUrl: '../../../assets/bathroom/3.jpg',
    previewUrl: '../../../assets/bathroom/3.jpg',
  },
  {
    srcUrl: '../../../assets/bathroom/4.jpg',
    previewUrl: '../../../assets/bathroom/4.jpg',
  },

  {
    srcUrl: '../../../assets/bathroom/5.jpg',
    previewUrl: '../../../assets/bathroom/5.jpg',
  },
];

const wardobe = [
  {
    srcUrl: '../../../assets/wardrobe/1.jpg',
    previewUrl: '../../../assets/wardrobe/1.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/2.jpg',
    previewUrl: '../../../assets/wardrobe/2.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/3.jpg',
    previewUrl: '../../../assets/wardrobe/3.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/4.jpg',
    previewUrl: '../../../assets/wardrobe/4.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/5.jpg',
    previewUrl: '../../../assets/wardrobe/5.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/6.jpg',
    previewUrl: '../../../assets/wardrobe/6.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/7.jpg',
    previewUrl: '../../../assets/wardrobe/7.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/8.jpg',
    previewUrl: '../../../assets/wardrobe/8.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/9.jpg',
    previewUrl: '../../../assets/wardrobe/9.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/10.jpg',
    previewUrl: '../../../assets/wardrobe/10.jpg',
  },
  {
    srcUrl: '../../../assets/wardrobe/11.jpg',
    previewUrl: '../../../assets/wardrobe/11.jpg',
  },
];
