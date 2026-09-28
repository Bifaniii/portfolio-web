import { Component, computed } from '@angular/core';
import { PROJECTS, SIDE_PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly featured = PROJECTS.find((p) => p.featured);
  protected readonly others = PROJECTS.filter((p) => !p.featured);
  protected readonly side = SIDE_PROJECTS;
  protected readonly totalTests = computed(() => PROJECTS.reduce((sum, p) => sum + (p.tests ?? 0), 0));
}
