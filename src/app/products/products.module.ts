import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ReplaceImgPipe } from './pipes/replace-img.pipe';



@NgModule({
  declarations: [
    ProductsListComponent,
    SearchBoxComponent,
    CardComponent,
    HomePageComponent,
    ReplaceImgPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class ProductsModule { }

