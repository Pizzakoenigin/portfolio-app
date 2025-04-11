import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { projects } from '../content-projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  projects = projects;

  ngOnInit(): void {
    
  }
  sortedCategories() {
    return Array.from(new Set (this.projects.map(project => project.category))).sort()
  }

  getProjectsByCategory(category: string) {
    return this.projects.filter(project => project.category === category)
  }

  // openSlideshow(){
  //   let arrayImages = Array.from(document.querySelectorAll('.bandImg img'));
  //   let currentImageIndex = 0;
    

  //   document.querySelector('.slideshow').style.display = "block";
  //   document.querySelector('.slideshow').style.backgroundImage = `url('${img.src}')`;
  //   // currentImageIndex = arrayImages.indexOf(img);
  //   // elements.imgDescText.innerText = `${imgDescArray[currentImageIndex]}`
  //   document.querySelector('.slideshow').style.backgroundPosition = "center";
  //   document.querySelector('.slideshow').style.backgroundRepeat = "no-repeat";
  //   document.querySelector('.slideshow').style.backgroundSize = "contain";
  //   document.querySelector('.container').style.display = "none";
  // }
}
