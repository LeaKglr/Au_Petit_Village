import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  title = "Bienvenue Au Petit Village !"
  presentation = "Chez Au Petit Village, nous sommes votre destination ultime des célèbres Gaulois de la bande dessinée. Nous sommes passionnés par l'univers d'Astérix et Obélix, et nous mettons tout en œuvre pour vous offrir une expérience unique et divertissante. Dans notre boutique, vous trouverez une large gamme de figurines mettant en vedette vos personnages préférés de l'univers d'Astérix et Obélix. Que vous soyez un collectionneur passionné ou simplement à la recherche d'un cadeau original, nous avons ce qu'il vous faut !"
  sousTitre = "Nos figurines que César nous envie :"
  btnpresentation = "Nom d'un menhir, montrez-moi votre histoire !"
  textbtn = "Dites m'en plus, Gaulois !"
  text="Présentation"

  filterText:string = '';
  filterByName: string = '';
  sortAsc: boolean = true;
  figurine: any;

  figurines: any[] = [];
  constructor(private router: Router, private productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.figurines = this.productsService.figurines
  }

  navigateToFigurineDetails(event: MouseEvent, figurine: any): void {
    event.preventDefault();
    this.router.navigate(['/figurine', figurine.name]);
  }

  navigateToAbout(event: MouseEvent,): void {
    event.preventDefault();
    this.router.navigate(['/about']);
  }

  toggleOrdreDeTri(): void {
    this.sortAsc = !this.sortAsc; // Inverser l'état du tri
  }

  getOrdreTri(): string {
    return this.sortAsc ? 'décroissant' : 'croissant';
  }
}
