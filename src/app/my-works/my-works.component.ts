import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/DSC_0232-3.jpg',
        medium: 'assets/images/DSC_0232-3.jpg',
        big: 'assets/images/DSC_0232-3.jpg'
      },
      {
        small: 'assets/images/photography-camera-hd-wallpaper1.jpg',
        medium: 'assets/images/photography-camera-hd-wallpaper1.jpg',
        big: 'assets/images/photography-camera-hd-wallpaper1.jpg'
      },
      {
        small: 'assets/images/2.jpg',
        medium: 'assets/images/2.jpg',
        big: 'assets/images/2.jpg'
      },{
        small: 'assets/images/wed.jpg',
        medium: 'assets/images/wed.jpg',
        big: 'assets/images/wed.jpg'
      },
      {
        small: 'assets/images/3.jpg',
        medium: 'assets/images/3.jpg',
        big: 'assets/images/3.jpg'
      }
    ];
  }

}
