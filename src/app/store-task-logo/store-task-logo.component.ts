import { Component , Input} from '@angular/core';
import { StoreTasks } from '../store-tasks';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-store-task-logo',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './store-task-logo.component.html',
  styleUrl: './store-task-logo.component.css'
})
export class StoreTaskLogoComponent {

  @Input() storetask!: StoreTasks; 

}
