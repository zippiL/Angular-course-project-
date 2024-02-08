import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule}from "@angular/common/http"
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { StudentService } from "./module/students/student.service";
import { TestAvgService } from "./module/students/testAvg.service";
import { SunAbssentservice } from "./module/students/sunAbssent.service";
import { ObservableComponent } from './observable/observable.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { StudentsModule } from "./module/students/students.module";



@NgModule({
    declarations: [AppComponent, ObservableComponent, SendEmailComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,StudentsModule],
    providers: [StudentService,TestAvgService,SunAbssentservice],
    bootstrap: [AppComponent]
})
export class AppModule {

}