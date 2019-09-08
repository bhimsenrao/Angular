import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

 @Injectable({
  providedIn: 'root'})
  
export class StudentService {
    students: Student[] = [
    { id: 121,    name: 'Krishna',    EnrollmentNumber: 110470116021,    College: 'REC',    University: 'JNTU'},
    {    id: 122,    name: 'Rishi',    EnrollmentNumber: 110470116023,    College: 'REC',    University: 'JNTU'},
    {    id: 123,    name: 'Ankita',    EnrollmentNumber: 110470116022,    College: 'REc',    University: 'JNTU'}];
  constructor() { }
   public getStudents(): any {
        const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
               alert("Page loading...in just one second");
           }, 2000);
       });
    return studentsObservable;
    }
}