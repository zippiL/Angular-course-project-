import { Input, Component, EventEmitter, Output,OnInit } from '@angular/core';
import { School_year, Student } from '../student.model';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Professions, app_professions } from '../professions.model';
import { SunAbssentservice } from '../sunAbssent.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  
  missingFromDate: Date;
  missingDays: number;
  totalMissingDays: number = 0
 
  professionsList:Professions[]=app_professions;
  
  stud_enum=School_year;

  private _stud:Student;

  public get stud():Student|undefined{
    return this._stud;
  }
 

  @Input()
  public set stud(value: Student | undefined){
    this._stud=value;
    if(this.stud!=undefined){
      this.studentFrom=new FormGroup({
        "id": new FormControl(this.stud.id),
        "firstName": new FormControl(this.stud.firstName,[Validators.required,Validators.minLength(3)]),
        "lastName": new FormControl(this.stud.lastName,Validators.required),
        "address": new FormControl(this.stud.address,Validators.required),
        "phone": new FormControl(this.stud.phone,Validators.required),
        "avgMark": new FormControl(this.stud.avgMark,Validators.required),
        "active": new FormControl(this.stud.active),
        "professionsId":new FormControl(this.stud.professionsId,Validators.required),
        "school_year":new FormControl(this.stud?.school_year,Validators.required)
        
       });
    }
  }
  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  studentFrom: FormGroup = new FormGroup({});
  saveNewStudent() {
    // if (this.missingDays && this.missingDays > 0)
    // this.stud.absenceDays.push({
    //   formDate: this.missingFromDate, TotalDays:
    //     this.missingDays
    // });
  
    const tests=this.stud.test;
    this.stud = this.studentFrom.value;
    this.stud.test=tests;
    this.onSaveNewStudent.emit(this.stud);
  }

  constructor(private _avgA:SunAbssentservice) { }


  ngOnInit(): void {
  }
}
