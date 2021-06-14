import { Component, OnInit } from '@angular/core';

import { ImagesService } from 'src/app/services/images.service';
import { MatDialog } from '@angular/material/dialog';

import { ImageDialogComponent } from 'src/app/image-dialog/image-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: string = '';
  images: any = [];
  image: any;

  constructor(private imagesService: ImagesService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  getImage() {
    this.imagesService.getImages( this.value).subscribe((data: any) => {
      this.images = data.data.children;
    },
    error => {
      this.images = [];
    })
  }

  openImages(image: any){
    this.image = image;
    const dialogRef = this.dialog.open(ImageDialogComponent);

    dialogRef.componentInstance.image = this.image;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
