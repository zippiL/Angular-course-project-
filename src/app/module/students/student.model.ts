import { DaysAbbsent } from "./daysAbbsent.model";
import { Test } from "./test.model";

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  avgMark: number;
  departureDate?: Date;
  active!: boolean;
  professionsId?: number;
  school_year: School_year;
  test: Test[];
  email?:string;
  absenceDays?: DaysAbbsent[];

  constructor(firstName: string)  {
    this.id = 0;
    this.firstName = firstName;
    this.lastName = "";
    this.address = "";
    this.phone = "";
    this.avgMark = 0;
    this.active = true;
    this.email = "";
    // this.school_year = School_year.year1;
  }

}
export enum School_year{
  year1=1,
  year2=2,
  year3=3

}
