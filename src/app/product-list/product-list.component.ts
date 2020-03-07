import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  listLabel = 'Produtos da loja'; 
  products = products;

  share() {
    window.alert('O produto foi compartilhado!');
  }
  onNotify(){
    window.alert('Avisaremos quando o preço mudar');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/