import { Injectable } from '@angular/core';
import { StoreTasks } from './store-tasks';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreTasksService {

  store_tasks_url='http://localhost:3000/storetasks';

  constructor(){
    this.store_tasks_url = environment.store_tasks_url;
  }



  async getAllStoreTasks(): Promise<StoreTasks[]> {
    const data = await fetch(this.store_tasks_url);
    return await data.json() ?? [];
  }
  
  async getStoreTaskByName(name: String): Promise<StoreTasks | undefined> {
    const data = await fetch(`${this.store_tasks_url}/${name}`);
    return await data.json() ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  
  //constructor() { }
}
