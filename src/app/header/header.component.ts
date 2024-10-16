import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
    <h1>welcome to my site</h1>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
