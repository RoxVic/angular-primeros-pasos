import { NgModule } from "@angular/core";
import { CountComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CountComponent
  ],
  exports: [
    CountComponent
  ]
})
export class CounterModule {

}
