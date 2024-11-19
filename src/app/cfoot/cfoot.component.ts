import { Component } from '@angular/core';

@Component({
  selector: 'app-cfoot',
  templateUrl: './cfoot.component.html',
  styleUrl: './cfoot.component.css'
})
export class CfootComponent {
  //DataBinding por propiedad

  private policy:string = 'Todos los derechos, feo el que robe'
  public test:string = '<strong><i>2024 Cursos bien </i>uwu</strong>'
  public smallPolicy:string = ' 2024 Mis cursos. Todos los derechos reservados.'
  public getPolicy():string {
    return this.policy
  }
}
