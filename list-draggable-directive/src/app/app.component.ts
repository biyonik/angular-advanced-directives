import { Component } from '@angular/core';
import ListDraggableDirective from '../directives/list-draggable.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListDraggableDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'list-draggable-directive';
}
