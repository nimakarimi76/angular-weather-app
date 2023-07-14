import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  title: string = 'Weather';
  // intervalSub: any;
  // ngOnInit(): void {
  //   this.intervalSub = setInterval(() => {
  //     console.log('on init');
  //   }, 500);
  // }

  // ngOnDestroy(): void {
  //   if (this.intervalSub) clearInterval(this.intervalSub);
  // }
}
