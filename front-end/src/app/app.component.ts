import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  public imagePath;  
  imageURL: any;
  
  showImage(files){
    
    if(files.length === 0)
      return;

    var imageType = files[0].type;

    if (imageType.match(/image\/*/) == null){
      console.log("No es imagen");
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0])
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    }
    console.log(this.imageURL)
  }
}
