import { Component } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-cteachers',
  templateUrl: './cteachers.component.html',
  styleUrl: './cteachers.component.css'
})
export class CteachersComponent {
  data:any;
  endPoint:string = 'users';
  constructor(private teachers: UsersServiceService){}
    getDataUsers(){
      this.teachers.getUsers(this.endPoint).subscribe(
        {
          next:(data: any)=>console.log(data),
          error:(error: any)=>console.log(error),
          complete:()=>{console.log("complete consume")}
        }
      );
    }
    ngOnInit():void{
      this.getDataUsers();
    }
}
