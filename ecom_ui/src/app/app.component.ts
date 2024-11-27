import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgxSplideModule } from 'ngx-splide';

// import { SplideComponent, SplideSlide } from '@splidejs/angular-splide';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgxSplideModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecomstore';
}
