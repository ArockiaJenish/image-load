import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-load'; 

  isProcess : boolean = false;
  count: number = 1;
  visible(){    
    
    
    console.log(this.count);
    if(this.count%2==1)
      this.isProcess = true;
    else
      this.isProcess = false;
      this.count++;
  }
}


