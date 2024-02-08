import { Component } from '@angular/core';
import { StudentService } from '../module/students/student.service';
import { Observable, filter, from, interval, map } from 'rxjs';
import { Student } from '../module/students/student.model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
})
export class ObservableComponent {
  timereValue: string;
  email:string;
  timer: Observable<Date> = interval(1000).pipe(map(x => new Date()));
  students: Student[];
  studentsSubject: Observable<string>;

  constructor(private _studentService: StudentService) {
    this._studentService.getStudents().subscribe((res) => {
      this.students = res;

      // this.studentsSubject = new Observable(obs => {
      //   this.students.forEach(student => obs.next(student.firstName+" "+student.lastName));
      // });
      this.studentsSubject = from(this.students).pipe(
        map(student => student.firstName+" "+student.lastName)
      );
     
// timer:Observable<Date>=new Observable(obs=>{
// setInterval(()=>{
//   obs.next(new Date());
// },1000)
// })
      this.timer.subscribe((val) => {
        this.timereValue = val.toLocaleTimeString();
      });

      this.studentsSubject.subscribe((name) => {
        console.log(name);
      });
    });
  }
}
