import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  prop: number = 5;

  childChangeEvent(value: number) {
    this.prop = value;
  }

  decrement() {
    this.prop--;
  }

}
