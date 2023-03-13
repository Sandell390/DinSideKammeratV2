import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  imageURL: string = 'https://media.tenor.com/2oKmlBbl19AAAAAC/xdd-xdding.gif'

  imageURL2: string = 'https://i.ytimg.com/vi/SilrNfBzzHg/maxresdefault.jpg';

  imageURL3: string = 'https://us-tuna-sounds-images.voicemod.net/a609d7da-97e7-4389-a982-ce3496554d74-1658714450122.png'

  changeURL(_string: string) {
    this.imageURL2 = _string;
  }
}
