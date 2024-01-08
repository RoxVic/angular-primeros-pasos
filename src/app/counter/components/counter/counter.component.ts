import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CountComponent{
  counter: number = 10;

  increasBy(num: number): void {
    this.counter += num;
  }

  reset():void {
    this.counter = 10;
  }
}
