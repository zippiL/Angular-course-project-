import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from "../student.model"
import { StudentService } from '../student.service';
import { SunAbssentservice } from '../sunAbssent.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',

})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  days: number;
  searchTerm$ = new Subject<string>(); // Subject למעקב אחר החיפוש
  filteredStudents: Student[] = [];

  private searchSubject = new Subject<string>();

  searchStudents$: Observable<Student[]>;

  searchText: string = "";

  searchStudents(term: string): Observable<Student[]> {
    return new Observable((observer) => {
      if (term.trim() === "") {
        observer.next(this.students);
      } else {
        const filteredStudents = this.students.filter(student =>
          student.firstName.toLowerCase().includes(term.toLowerCase())
        );
        observer.next(filteredStudents);
      }
    });
  }

  onSearchInputChange(): void {
    this.searchSubject.next(this.searchText);
  }

  deleteStudent(stud: Student) {
    // let indexToDelete = this.students.indexOf(stud);
    // this._studentService.deleteStudentFromService(indexToDelete).subscribe(()=>{
    //   this.students.splice(indexToDelete, 1);
    // },err =>{
    //   alert("error!")
    // })
    let i;
    for (i = 0; i < this.students.length; i++)
      if (this.students[i].id == stud.id)
        break;

    this._studentService.deleteStudentFromService(stud.id).subscribe(()=>{
      this.students.splice(i, 1);
    },err =>{
      alert("error!")
    })
  
  }
  detstudent?: Student;


  showDetails(stud: Student) {
    this.detstudent = stud;

  }
  addStudent() {
    this.detstudent = new Student("");
  }
  addStudentToList(studToAdd: Student) {

    this._sumA.getSunAbssent(studToAdd.id).then((res) => this.days = res);
    if (studToAdd.id == 0) {
      studToAdd.id = this.students[this.students.length - 1].id + 1;
        this._studentService.saveStudent(studToAdd).subscribe((res)=>{
          this.students.push(studToAdd);
          this._studentService.getStudents().subscribe(res => {
            this.students = res;
          });
        },err =>{
          alert(err)
        });  
      
    }

    else {

      let index = this.students.findIndex(x => x.id == studToAdd.id)
      this.students[index] = studToAdd;
      this._studentService.updateStudentToService(studToAdd, studToAdd.id).subscribe(()=>{
         this._studentService.getStudents().subscribe(res => {
         this.students = res;
       });
       }, err =>{
         alert("error!")
       })
    }

    this.detstudent = new Student("");

  }
  showactive(active: boolean) {
    this._studentService.getStudentActive(active).subscribe(
      data => this.filteredStudents = data)
  }

  constructor(private _studentService: StudentService, private _sumA: SunAbssentservice) {

  }
  ngOnInit(): void {
    
      this.setupSearchObservable();
      this._studentService.getStudents().subscribe(res => {
        this.students = res;
        this.filteredStudents = res; 
        this.setupSearchObservable();
      });

  }
  



  private setupSearchObservable(): void {
    this.searchStudents$ = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchStudents(term))
    );
  
    this.searchStudents$.subscribe((result: Student[]) => {
      this.filteredStudents = result;
    });
  }
}
