import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//! Importación de Modulos
import { ProductsModule } from './products/products.module';
//! IMmportación de componentes
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
