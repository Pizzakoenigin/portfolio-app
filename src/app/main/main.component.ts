import { Component } from '@angular/core';
import { about } from '../content-about';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-main',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  about = about
}
