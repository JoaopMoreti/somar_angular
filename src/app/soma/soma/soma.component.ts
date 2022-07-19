import { Component, OnInit } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {
  private res : number = 0; /* é uma variavel dentro de uma propriedade privada. Essa variavel vai servir para armazenar o resultado do metodo soma abaixo*/

  constructor(private somaService: SomaService) { }

  ngOnInit(): void {
  }

  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    /*essas  variaveis vão servir para suprirem o parametro e armazenar os dados preenchidos neles.*/

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.somaService.somar(n1, n2);
  }
  /*o this serve para chamar o elemento de um outro escopo (escopo = algo que esteja dentro de um (),[] ou {} ou até mesmo arquivo ou pagina   ) */

  get resultado(): string {
    return this.res.toString();
  }
  //mostra o resultado na tela

}
