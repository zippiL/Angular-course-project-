import { Injectable } from "@angular/core";
import { StudentService } from "./student.service";
import { Student } from "./student.model";

@Injectable()
export class SunAbssentservice {
    listStud: Student[] = [];
    getSunAbssent(id: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this._listStudents.getStudents().subscribe((list) => {
                this.listStud = list;
                var index = this.listStud.findIndex((student) => student.id == id);
                var sum = 0, count = 0; 
                // this.listStud[index].absenceDays.forEach((i) => { sum +=i.TotalDays ; count++ });
                resolve(sum / count);
            })
        })
    }
    constructor(private _listStudents: StudentService) {   
    }
}