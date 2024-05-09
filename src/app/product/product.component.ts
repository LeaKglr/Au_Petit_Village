import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit{
  text="Présentation"
  figurines: any[] = [];
  figurine: any;
 
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    const figurineName = this.route.snapshot.paramMap.get('name');
    if (figurineName) {
      this.figurine = this.productsService.getFigurineByName(figurineName);
    } else {
      this.figurines = this.productsService.getAllFigurines();
    }
  }
}
