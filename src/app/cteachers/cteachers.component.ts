import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cteachers',
  templateUrl: './cteachers.component.html',
  styleUrl: './cteachers.component.css'
})
export class CteachersComponent {
  data: any;
  endPoint: string = 'users';
  newUser = {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: { firstname: '', lastname: '' },
    address: { city: '', street: '', number: 0, zipcode: '', geolocation: { lat: '', long: '' } },
    phone: ''
  };

  constructor(private teachers: UsersServiceService) { }

  // Obtener datos de usuarios existentes
  getDataUsers() {
    this.teachers.getUsers(this.endPoint).subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(this.data);
      },
      error: (error: any) => console.log(error),
      complete: () => { console.log("complete consume") }
    });
  }

  createNewUser() {
    this.teachers.createUser(this.endPoint, this.newUser).subscribe({
      next: (response: any) => {
        console.log('User created:', response);
        this.newUser.id = response.id; 
        this.data.push(this.newUser);
    
        this.resetForm(); 
      },
      error: (error: any) => console.error('Error creating user:', error)
    });
  }

 
  resetForm() {
    this.newUser = {
      id: 0,
      email: '',
      username: '',
      password: '',
      name: { firstname: '', lastname: '' },
      address: { city: '', street: '', number: 0, zipcode: '', geolocation: { lat: '', long: '' } },
      phone: ''
    };
  }

  ngOnInit(): void {
    this.getDataUsers();
  }
}