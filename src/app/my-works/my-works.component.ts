import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { Lightbox } from "ngx-lightbox";

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent {
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];


  constructor(private _lightbox: Lightbox) {

  }
  _albums = [ {
    id: 1,
    src: 'assets/images/DSC_0232-3.jpg',
    thumb: 'assets/images/DSC_0232-3.jpg',
    // workType: 'Індивідуальна',
    categories: [1]
  },
    {
      id: 2,
      src: 'assets/images/photography-camera-hd-wallpaper1.jpg',
      thumb: 'assets/images/photography-camera-hd-wallpaper1.jpg',
      // workType: 'Портрет',
      categories: [2]
    },
    {
      id: 3,
      src: 'assets/images/2.jpg',
      thumb: 'assets/images/2.jpg',
      // workType: 'Love Story',
      categories: [3]
    },{
      id: 4,
      src: 'assets/images/wed.jpg',
      thumb: 'assets/images/wed.jpg',
      // workType: 'Весілля',
      categories: [4]
    },
    {
      id: 5,
      src: 'assets/images/3.jpg',
      thumb: 'assets/images/3.jpg',
      // workType: "Сім'я",
      categories: [5]
    }
  ];

  categories = [
    {
      id: 1,
      category: 'Індивідуальна'
    },{
      id: 2,
      category: 'Портрет'
    },{
      id: 3,
      category: 'Love Story'
    },{
      id: 4,
      category: 'Весілля'
    },{
      id: 5,
      category: "Сім'я"
    }
  ];

  filteredItems = [...this._albums];
  filterItemsByCategory(category) {
    this.filteredItems = this._albums.filter((item) => {
      return item.categories.includes(category.id);
    })
  }
  reset() {
    this.filteredItems = [...this._albums];
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.filteredItems, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  // ngOnInit() {
  //   this.galleryOptions = [
  //     {
  //       width: '800px',
  //       height: '600px',
  //       thumbnailsColumns: 5,
  //       imageAnimation: NgxGalleryAnimation.Zoom
  //     },
  //     // max-width 800
  //     {
  //       breakpoint: 800,
  //       width: '100%',
  //       height: '600px',
  //       imagePercent: 100,
  //       thumbnailsPercent: 20,
  //       thumbnailsMargin: 20,
  //       thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //       breakpoint: 400,
  //       previewKeyboardNavigation: true,
  //       previewAnimation: true,
  //       previewSwipe: true
  //     }
  //   ];
  //
  //   this.galleryImages = [
  //     {
  //       src: 'assets/images/DSC_0232-3.jpg',
  //       thumb: 'assets/images/DSC_0232-3.jpg'
  //     },
  //     {
  //       src: 'assets/images/photography-camera-hd-wallpaper1.jpg',
  //       thumb: 'assets/images/photography-camera-hd-wallpaper1.jpg'
  //     },
  //     {
  //       src: 'assets/images/2.jpg',
  //       thumb: 'assets/images/2.jpg'
  //     },{
  //       src: 'assets/images/wed.jpg',
  //       thumb: 'assets/images/wed.jpg'
  //     },
  //     {
  //       src: 'assets/images/3.jpg',
  //       thumb: 'assets/images/3.jpg'
  //     }
  //   ];
  // }

}
