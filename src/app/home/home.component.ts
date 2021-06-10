import { Component, OnInit } from '@angular/core';

import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: string = '';
  images: any = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {}

  getImage() {
    this.imagesService.getImages( this.value).subscribe((data: any) => {
      this.images = data;
    })
  }

}
