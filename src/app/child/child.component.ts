import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() prop: number = 0;
  @Output() propChange: EventEmitter<number> = new EventEmitter();


  increment() {
    this.prop++;
    this.propChange.emit(this.prop)
  }
}
