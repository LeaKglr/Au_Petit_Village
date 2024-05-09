import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  figurines = [
    { name: "Astérix et Idéfix", price: 13.95, img:"assets/Figurines/AsterixEtIdefix.jpg", alt:"Image d'une figurine d'Astérix portant Idéfix dans sa main", presentation:"Figurine d'Astérix et Idéfix", age:"3 ans et plus", dimensions:"8,4 x 14,4 x 0,4cm; 20 grammes", piece:"1"},

    { name: "Idéfix", price: 12.50, img:"assets/Figurines/Idefix.jpg", alt:"Image d'une figurine d'Idéfix", presentation:"Figurine d'Idéfix assis", age:"3 ans et plus", dimensions:"3,4 x 3,4 x 4 cm; 15 grammes", piece:"1"},
    
    { name: "Bonnemine", price: 11.80, img:"assets/Figurines/Bonnemine.jpg", alt:"Image d'une figurine de Bonnemine", presentation:"Figurine de Bonnemine", age:"3 ans et plus", dimensions:"4 x 6 x 3 cm; 20 grammes", piece:"1"},
    
    { name: "Abraracourcix", price: 9.93, img:"assets/Figurines/Abraracourcix.jpg", alt:"Image d'une figurine d'Abraracourcix", presentation:"Figurine d'Abraracourcix, Le Chef", age:"3 ans et plus", dimensions:"4 x 3 x 6 cm; 20 grammes", piece:"1"},
    
    { name: "Assurancetourix", price: 11.76, img:"assets/Figurines/Assurancetourix.jpg", alt:"Image d'une figurine d'Assurancetourix jouant de la Lyre", presentation:"Figurine d'Assurancetourix jouant de la Lyre", age:"3 ans et plus", dimensions:"2 x 2 x 6,5 cm; 10 grammes", piece:"1"},
    
    { name: "Astérix mains sur les bretelles", price: 12.73, img:"assets/Figurines/AsterixBretelles.jpg", alt:"Image d'une figurine d'Astérix fier se tenant les bretelles avec ses mains", presentation:"Figurine d'Astérix fier se tenant les bretelles", age:"3 ans et plus", dimensions:"5 x 2 x 3 cm; 9,07 grammes", piece:"1"},
    
    { name: "Astérix, Obélix et Falbala", price: 175, img: "assets/Figurines/AsterixObelixEtFalbala.jpg", alt:"Image d'une figurine d'Astérix et Obélix avec Falbala sous un Gui sous la neige", presentation:"Figurine d'Astérix et Obélix avec Falbala, Gui sous la Neige", age:"Non défini", dimensions:"8 cm; 750 grammes", piece:"1"},
    
    { name: "Astérix, Obélix et la danse du Sirtaki", price: 150, img:"assets/Figurines/AsterixObelixEtLaDanseduSirtaki.jpg", alt:"Image d'une figurine d'Astérix, Obélix faisant une danse du Sirtaki", presentation:"Figurine d'Astérix et Obélix et la danse du Sirtaki", age:"Non défini", dimensions:"8 cm; 750 grammes", piece:"1"},
    
    { name: "Centurion", price: 9.95, img:"assets/Figurines/Centurion.jpg", alt:"Image d'une figurine de Centurion avec une épée", presentation:"Figurine de Centurion avec une épée", age:"3 ans et plus", dimensions:"4 x 3 x 3cm; 9.07 grammes", piece:"1"},
    
    { name: "Cesar", price: 11.28, img:"assets/Figurines/Cesar.jpg", alt:"Image d'une figurine", presentation:"Figurine de César", age:"3 ans et plus", dimensions:"2 x 4,5 x 8cm; 20 grammes", piece:"1"},
    
    { name: "Legionnaire", price: 7.50, img:"assets/Figurines/Legionnaire.jpg", alt:"Image d'une figurine de César", presentation:"Figurine Légionnaire avec sa lance.", age:"3 ans et plus", dimensions:"8,4 x 14,4 x 8cm; 20 grammes", piece:"1"},
    
    { name: "Lot de figurines Village Gaulois", price: 29.90, img:"assets/Figurines/LotFigurinesVillageGaulois.jpg", alt:"Image d'un Lot de 7 figurines de la collection d'Astérix et Obélix.", presentation:"Lot de 7 figurines de la collection d'Astérix et Obélix.", age:"3 ans et plus", dimensions:"6 x 34 x 32.3 cm; 120 grammes", piece:"7"},
    
    { name: "Obélix et une pile d'albums", price: 119.45, img:"assets/Figurines/ObelixEtPileDalbums.jpg", alt:"Image d'une figurine d'Obélix portant une pile d'albums sur son dos", presentation:"Figurine d'Obélix portant une pile d'albums sur son dos", age:"12 ans et plus", dimensions:"15,5 x 13 x 24,6 cm; 1,44 kilogrammes", piece:"124"},
    
    { name: "Obélix mains dans les poches", price: 11.33, img:"assets/Figurines/ObelixMainsPoches.jpg", alt:"Image d'une figurine d'Obélix les mains dans les poches", presentation:"Figurine d'Obélix les mains dans les poches", age:"3 ans et plus", dimensions:"3,8 x 5,2 x 7,8 cm; 2,5 grammes", piece:"1"},
    
    { name: "Panoramix", price: 11.09, img:"assets/Figurines/Panoramix.jpg", alt:"Image d'une figurine de Panoramix et sa marmite", presentation:"Figurine de Panoramix et sa marmite", age:"3 ans et plus", dimensions:"7 x 3,5 x 4 cm; 18,14 grammes", piece:"1"},
    
    { name: "Sanglier", price: 14.29, img:"assets/Figurines/Sanglier.jpg", alt:"Image d'une figurine d'un sanglier", presentation:"Figurine d'un sanglier", age:"3 ans et plus", dimensions:"3,5 x 4,3 x 6 cm; 31,75 grammes", piece:"1"},
  ];

  getAllFigurines(): any[] {
    return this.figurines;
  }

  getFigurineByName(figurineName: string): any {
    return this.figurines.find(figurine => figurine.name === figurineName);
  }

  constructor() { }

}