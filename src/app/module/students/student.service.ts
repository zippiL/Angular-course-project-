import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
const STUDENT:Student[]=[
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      phone: "555-1234",
      avgMark: 90,
      departureDate: new Date("2023-12-01"),
      active: true,
      professionsId: 2,
      school_year: 1,
      test: [{nameOfTest: "English",mark:100},{nameOfTest: "Math",mark:100}],
      email:"JohnDoe@gmail.con",
      absenceDays:[],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      phone: "555-5678",
      avgMark: 85,
      active: false,
      professionsId: 3,
      school_year: 2,
      test: [{nameOfTest: "English",mark:100},{nameOfTest: "Math",mark:100}],
      email:"JaneSmith@gmail.con",
      absenceDays:[],

    },
    {
      id: 3,
      firstName: "Alex",
      lastName: "Johnson",
      address: "789 Oak St",
      phone: "555-9012",
      avgMark: 95,
      active: true,
      professionsId: 1,
      school_year: 3,
      test: [{nameOfTest: "English",mark:100},{nameOfTest: "Math",mark:100}],
      email:"AlexJohnson@gmail.con",
      absenceDays:[],

    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Williams",
      address: "321 Pine St",
      phone: "555-3456",
      avgMark: 88,
      active: true,
      professionsId: 1,
      school_year: 2,
      test: [{nameOfTest: "English",mark:100},{nameOfTest: "Math",mark:100}],
      email:"SarahWilliams@gmail.con",
      absenceDays:[],
      
    },
    {
      id: 5,
      firstName: "Michael",
      lastName: "Brown",
      address: "654 Cedar St",
      phone: "555-7890",
      avgMark: 92,
      active: true,
      professionsId: 4,
      school_year: 1,
      test: [{nameOfTest: "English",mark:100},{nameOfTest: "Math",mark:100}],
      email:"MichaelBrown@gmail.con",
      absenceDays:[],
    }
  ]; 
@Injectable()
export class StudentService{

    getStudents():Observable<Student[]>{
      return this._http.get<Student[]>("/api/Students");
  }
   
   getStudentActive(active:boolean):Observable<Student[]>{
    return this._http.get<Student[]>("/api/Students/"+active);
  }
  saveStudent(student: Student): Observable<boolean> {
    return this._http.post<boolean>("/api/Students/",student);
  }
  updateStudentToService(updateStudent : Student, id : Number): Observable<boolean> {
    return this._http.put<boolean>("/api/Students/" + id,updateStudent)
  }
  deleteStudentFromService(id : Number): Observable<boolean> {
    return this._http.delete<boolean>("/api/Students/" + id)
  }
constructor(private _http:HttpClient){

}
}
  // getStudents():Promise<Student[]>{
    //    return new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         res(STUDENT);
    //     },3000)
       
    //    })
    // }