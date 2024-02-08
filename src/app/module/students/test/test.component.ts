import { Component, Input, Output } from '@angular/core';
import { Test } from '../test.model';
import { TestAvgService } from '../testAvg.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent {
  @Input() tests: Test[] | undefined;

  private _id: number = 0;
  avg: number | undefined;

  @Input()
  set id(value: number) {
    this._id = value;
    this.updateAvgStud();
  }

  get id(): number {
    return this._id;
  }

  constructor(private _avg: TestAvgService) {}

  private updateAvgStud() {
    console.log(this.id)
    this._avg.getTestAvg(this.id).then((av) => (this.avg = av));
  }

}
