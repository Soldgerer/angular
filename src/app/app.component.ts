import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Componente Principal';
  private owo:string = 'owo';
  //Databinding 1.Interpolación

  public getOwo():string{

    return this.owo;
  }

  sectionTitle:string = 'Loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdadwadsadwa';
  private uwu:string = '';

}
