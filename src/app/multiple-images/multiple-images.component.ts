import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-images',
  templateUrl: './multiple-images.component.html',
  styleUrls: ['./multiple-images.component.scss']
})
export class MultipleImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images:any=[];
 
  

  
 
  
 onFileChange(event:any) {
  console.log('file changed');
   if (event.target.files && event.target.files[0]) {
       var filesAmount = event.target.files.length;
       for (let i = 0; i < filesAmount; i++) {
               var reader = new FileReader();
  
               reader.onload = (event:any) => {
                 //console.log(event.target.result);
                  this.images.push(event.target.result); 
  
               }
 
               reader.readAsDataURL(event.target.files[i]);
       }
   }
      //console.log(this.images)
 }

  deleteImage(url: any): void {
  this.images = this.images.filter((a:any) => a !== url);
  console.log(this.images);
}

}
