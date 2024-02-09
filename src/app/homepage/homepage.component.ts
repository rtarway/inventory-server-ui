import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreTaskLogoComponent } from '../store-task-logo/store-task-logo.component';
import { StoreTasks } from '../store-tasks';
import { StoreTasksService } from '../store-tasks.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
   
    CommonModule,StoreTaskLogoComponent,
    ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})


export class HomepageComponent {

  allStoreTaskList: StoreTasks[] = [];
  storeTaskService: StoreTasksService = inject(StoreTasksService);

  filteredStoreTaskList: StoreTasks[] = [];
  
  constructor() {
    this.storeTaskService.getAllStoreTasks().then((allStoreTaskList: StoreTasks[]) => {
      this.allStoreTaskList = allStoreTaskList;
      this.filteredStoreTaskList = allStoreTaskList;
    });
  }

    

  filterResults(text: string) {
    if (!text) {
      this.filteredStoreTaskList = this.allStoreTaskList;
      return;
    }

    this.filteredStoreTaskList = this.allStoreTaskList.filter(
      storetask => storetask?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  


}
