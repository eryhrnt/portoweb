import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatGridListModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  frontendProjects = [
    { title: 'Project One', description: 'A brief description of Project One.', image: 'assets/sigma.png' },
    { title: 'Project Two', description: 'A brief description of Project Two.', image: 'assets/sigma.png' },
    { title: 'Project Three', description: 'A brief description of Project Three.', image: 'assets/sigma.png' },
    // Add more projects as needed
  ];

  dataAnalysisProjects = [
    { title: 'Project One', description: 'A brief description of Project One.', image: 'assets/sigma.png' },
    { title: 'Project Two', description: 'A brief description of Project Two.', image: 'assets/sigma.png' },
    { title: 'Project Three', description: 'A brief description of Project Three.', image: 'assets/sigma.png' },
    // Add more projects as needed
  ];

  gameMusicProjects = [
    { title: 'Project One', description: 'A brief description of Project One.', image: 'assets/sigma.png' },
    { title: 'Project Two', description: 'A brief description of Project Two.', image: 'assets/sigma.png' },
    { title: 'Project Three', description: 'A brief description of Project Three.', image: 'assets/sigma.png' },
    // Add more projects as needed
  ];

}
