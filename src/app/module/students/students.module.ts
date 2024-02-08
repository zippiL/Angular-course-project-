import { NgModule } from "@angular/core";
import { AppComponent } from "../../app.component";
import { StudentsComponent } from "./students/students.component";
import { FormDetailComponent } from "./form-detail/form-detail.component";
import { TestComponent } from "./test/test.component";
import { StudentService } from "./student.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [StudentsComponent, FormDetailComponent, TestComponent],
    imports: [CommonModule,BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule],
    providers: [StudentService],
    bootstrap: [AppComponent],
    exports:[StudentsComponent]
})
export class StudentsModule{

}