import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.css'],
})
export class AboutChildComponent {
  @Input() childMessage: string | undefined;
  @Input() anotherMessage: string | undefined;

  @Output() messageEvent = new EventEmitter<number>();
  counter: number = 0;
  sendMessage() {
    this.messageEvent.emit(this.counter++);
  }
}
