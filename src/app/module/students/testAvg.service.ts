import { Injectable } from "@angular/core";
import { StudentService } from "./student.service";
import { Student } from "./student.model";

@Injectable()
export class TestAvgService {

    listStud: Student[] = [];
    getTestAvg(id: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this._listStudents.getStudents().subscribe((list) => {
                this.listStud = list;
                var index = this.listStud.findIndex((student) => student.id == id);
                var sum = 0, count = 0; 
                this.listStud[index].test?.forEach((test) => { sum += test.mark; count++ });
                resolve(sum / count);
            })
        })
    }
    constructor(private _listStudents: StudentService) {   
    }
}
