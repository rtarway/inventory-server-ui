import { Injectable } from '@angular/core';
import { StoreTasks } from './store-tasks';

@Injectable({
  providedIn: 'root'
})
export class StoreTasksService {

  url='http://localhost:3000/storetasks';

  async getAllStoreTasks(): Promise<StoreTasks[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getStoreTaskByName(name: String): Promise<StoreTasks | undefined> {
    const data = await fetch(`${this.url}/${name}`);
    return await data.json() ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  
  //constructor() { }
}
