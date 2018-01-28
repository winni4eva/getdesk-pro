import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Image} from './image.interface';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'css-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})

export class CSSCarouselComponent implements OnChanges, OnInit {
  @Input('images') images;
  @Input('name') name;
  
  ngOnInit(){
    //this.formatImageUrls();
  }

  ngOnChanges(changes: SimpleChanges) {
    let formattedImages = [];
    changes.images.currentValue.map(image => {
        let splitString = image.img_path.split(`${image.listing_id}/`);
        let imgUrl = splitString[0]+image.listing_id+'/2x/'+splitString[1];
        formattedImages.push({img_path: imgUrl})
    });
    this.images=formattedImages;
  }

  formatImageUrls(){
    this.images.map(image=>{
      //console.log(image)
    });
  }
}

// var IMAGES: Image[] = [
// 	{ img_path: "/assets/images/desks/79/workspace4.jpg" },
// 	{ img_path: "/assets/images/desks/79/workspace3.jpg" },
//     { img_path: "/assets/images/desks/79/workspace1.jpeg"}
// ];