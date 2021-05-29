import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  open(path: string[] = []): any[] {
    return ['/projects', ...path];
  }
}