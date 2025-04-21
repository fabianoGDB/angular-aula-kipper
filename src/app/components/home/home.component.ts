import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = "Jhon doe";
  imageUrl = "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg";
  cont = signal(0)

  constructor(private service: HelloWorldService){
    this.service.getPokemon().subscribe({
      next: (data) =>
      {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () =>
        console.log("finalizou")
    })
  }

  test() {
    this.cont.update(cont => cont + 1)
    console.log("teste")
  }
}
