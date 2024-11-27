import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-product-layout',
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './product-layout.component.html',
    styleUrl: './product-layout.component.scss'
})
export class ProductLayoutComponent {

}
