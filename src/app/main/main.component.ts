import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, MatGridListModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  frontendProjects = [
    {
      title: 'Evil Corps',
      description: 'A Flutter mobile e-finance app that functions as a secure e-wallet, allowing users to store, manage funds, and seamlessly convert between multiple currencies. The app features real-time exchange rate updates, enabling smooth cross-border transactions for both individuals and businesses.',
      image: 'assets/evilCorps.png'
    },
    {
      title: 'FunLearn',
      description: 'Web-based e-learning app that offers various classes through video lessons and easy-to-complete assignments. It also includes a calendar feature to track upcoming events and deadlines from the institution, providing a streamlined learning experience for students.',
      image: 'assets/funlearn.png'
    },
    {
      title: 'Invest Saiki',
      description: 'Web-based e-finance platform that enables users to invest in micro, small, and medium enterprises (MSMEs), helping these businesses grow. The app simplifies the investment process, offering opportunities for users to support and benefit from the success of small businesses.',
      image: 'assets/investSaiki.png'
    },
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
