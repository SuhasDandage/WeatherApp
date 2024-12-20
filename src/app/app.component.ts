import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { ContainerComponent } from './components/container/container.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ContainerComponent,
    FormsModule
  ],
  providers: [
    WeatherService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
