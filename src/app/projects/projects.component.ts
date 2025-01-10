import { Component, OnInit } from '@angular/core';
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
}
