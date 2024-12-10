import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgxSplideModule } from 'ngx-splide';
// import { NgScrollbarModule } from 'ngx-scrollbar';


@Component({
    selector: 'app-homelayout',
    imports: [HeaderComponent, FooterComponent, NgxSplideModule],
    templateUrl: './homelayout.component.html',
    styleUrl: './homelayout.component.scss'
})
export class HomelayoutComponent {
    splideOptions = {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        arrows: true,
        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      };
    products = [
        {
            id: 1,
          name: '24/7® Classic Unlined Minimizer Bra',
          image: 'assets/images/shoe4.jpg',
          oldPrice: 76,
          newPrice: 59,
          rating: '★★★★☆',
          reviews: 1000,
          feature: 'Reduces up to 2"',
        },
        {
            id: 2,
          name: 'ComfortStretch Smoothing Full Coverage Bra',
          image: 'assets/images/shoe5.jpg',
          oldPrice: 78,
          newPrice: 65,
          rating: '★★★★☆',
          reviews: 678,
          feature: 'Front & Back Smoothing',
        },
        {
            id: 3,
          name: 'ComfortStretch Smoothing Full Coverage Bra',
          image: 'assets/images/shoe5.jpg',
          oldPrice: 78,
          newPrice: 65,
          rating: '★★★★☆',
          reviews: 678,
          feature: 'Front & Back Smoothing',
        },
        {
            id: 4,
          name: 'ComfortStretch Smoothing Full Coverage Bra',
          image: 'assets/images/shoe5.jpg',
          oldPrice: 78,
          newPrice: 65,
          rating: '★★★★☆',
          reviews: 678,
          feature: 'Front & Back Smoothing',
        },
        {
            id: 5,
          name: 'ComfortStretch Smoothing Full Coverage Bra',
          image: 'assets/images/shoe5.jpg',
          oldPrice: 78,
          newPrice: 65,
          rating: '★★★★☆',
          reviews: 678,
          feature: 'Front & Back Smoothing',
        },
        // Add more product objects
      ];
}
