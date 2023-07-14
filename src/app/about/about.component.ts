import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  clickedMessages: any = []; //
  receiveMessage(message: number) {
    this.clickedMessages.push(message);
    // console.log(this.clickedMessages);
  }

  showChild: boolean = true;
  toggleButton: string = this.showChild ? 'Hide' : 'Show the child';

  handleShowChild(event: any): void {
    this.showChild = !this.showChild;
    this.toggleButton = this.showChild ? 'Hide' : 'Show the child';

    console.log(event);
  }

  todaysDate = new Date();
}
