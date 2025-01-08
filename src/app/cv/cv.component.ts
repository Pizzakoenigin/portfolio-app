import { Component } from '@angular/core';
import { cv } from '../content-cv';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  cv = cv
}
