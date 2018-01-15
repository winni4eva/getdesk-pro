import {Component, Input} from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'css-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})

export class CSSCarouselComponent {
	@Input('images') images;
}

// var IMAGES: Image[] = [
// 	{ img_path: "/assets/images/desks/79/workspace4.jpg" },
// 	{ img_path: "/assets/images/desks/79/workspace3.jpg" },
//     { img_path: "/assets/images/desks/79/workspace1.jpeg"}
// ];