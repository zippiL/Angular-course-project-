import { Component } from '@angular/core';
import { StudentService } from '../module/students/student.service';
import { Student } from '../module/students/student.model';
import { Observable, filter, from, map } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {
  students: Student[];

    sendEmail: Observable<string>;

    sendEmail2: Observable<string>;
send() {
    this.sendEmail2.subscribe((massage) => {
        alert(massage);
    })
}
constructor(private _students: StudentService) {

}
ngOnInit(): void {
  this._students.getStudents().subscribe((res) => {
      this.students = res;

      this.sendEmail = new Observable((observer) => {
        this.students.forEach((student) => {
          // שלח אימייל
          // if (student.active) {
            observer.next("The mail was sent successfully to address: " + student.email);
          // }
        });
      })

      this.sendEmail2 = from(this.students).pipe(filter(student => student.active == true),map((student) => {
          return ("The mail was sended successfully to address: " + student.email)
      }))
  })


}
}
