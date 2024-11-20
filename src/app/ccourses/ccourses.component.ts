import { Component } from '@angular/core';

@Component({
  selector: 'app-ccourses',
  templateUrl: './ccourses.component.html',
  styleUrl: './ccourses.component.css'
})
export class CcoursesComponent {
  //1. propiedades

  private courses!:string[];
  private response!:string|number;
  names:string = "sadsada";
  lastnames:string ="";
  age:string = "";

  constructor(){
    this.courses = ["JAVA", "C", "C#", "C++", "PAINT"];
    this.response ="";  
  }

  public getCourses():string[]{
    return this.courses;
  }

  public getResponse():string|number{
    return this.response;
  }

  public getRegisterCoursePerson(names:string, lastnames:string, age:string, address:string, email:string, phone:string, course:string):void{
    this.registerCoursePerson(names, lastnames, age, address, email, phone, course);
  }
  

  private registerCoursePerson(names:string, lastnames:string, age:string, address:string, email:string, phone:string, course:string):String{

    return this.response =`Se ha inscrito en el curso: ${course} \n
    la persona ${names} ${lastnames} de edad: ${age}, direccion ${address} y telefono ${phone} `;

  }                                                                                                


}
