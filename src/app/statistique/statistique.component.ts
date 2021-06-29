import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input() id: any;
  @Input() titre: any;
  @Input() valeur: any;
  @Input() appreciation: any;
  
  //stat1=new StatistiqueComponent(1,'Démographie france','60M','SUCCESS');
  //stat2=new StatistiqueComponent(2,'Démographie Espagne','50M','SUCCESS');
  

  constructor(id: Number,titre: String,valeur: String,appreciation: String) {
    this.id=id;
    this.titre=titre;
    this.valeur=valeur;
    this.appreciation;
   }


  ngOnInit(): void {
  }

}
