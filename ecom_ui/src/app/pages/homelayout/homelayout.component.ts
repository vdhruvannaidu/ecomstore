import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgxSplideModule } from 'ngx-splide';
import { NgScrollbarModule } from 'ngx-scrollbar';


@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgxSplideModule, NgScrollbarModule],
 
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.scss',
  
})
export class HomelayoutComponent {

}
