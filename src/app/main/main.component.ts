import { Component } from '@angular/core';
import { about } from '../content-about';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  about = about
}
