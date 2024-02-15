import { Injectable, inject } from '@angular/core';
import { StoreInventory } from './store-inventory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StoreInventoryService {
  
  
  store_inventory_query_url='http://localhost:3002/storeinventory';
  store_inventory_post_url='http://localhost:8080/sample.json';
  invdtl_list: StoreInventory[] = [];
  
  
  constructor(private http: HttpClient, private router:Router) {

    this.store_inventory_query_url = environment.store_inventory_query_url;
    this.store_inventory_post_url = environment.store_inventory_post_url;

   }


 

  async getAllLocationsInStoreForSKU(SKU:string, storeId:string): Promise<StoreInventory[]>{
    //const data = await fetch(`${this.url}/${storeId}/${SKU}`);

    const data = await fetch(`${this.store_inventory_query_url}`);

    return await data.json() ?? {};
  }

  async moveInventoryInStore(SKU:string, storeId:string, sourcelocation:string, targetlocation:string, quantity:number): Promise<any>{
    
    
   
    //update sourceLocationInventory
    var post_message = {
      "SKU": `${SKU}`,
      "storeId": `${storeId}`,
      "sourcelocation":`${sourcelocation}`,
      "targetlocation": `${targetlocation}`,
      "quantity": `${quantity}`
    };

    console.log(post_message);
    
    var headers = new HttpHeaders({ 
    'My-Custom-Header': 'foobar',
    'Content-Type': 'text/json',
    'Access-Control-Allow-Origin': '**',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
    
   });

    //await postMessage(post_message,this.url);
    
    this.http.post<any>(this.store_inventory_post_url, post_message).subscribe(
      {
        next: data => {
          alert("Location Quantity Updated"); 
          console.log(data);
          

          // this.getAllLocationsInStoreForSKU(`${SKU}`, `${storeId}`).
          // then( (fetched_storeInventory: StoreInventory[]) => {
          //   this.invdtl_list=fetched_storeInventory;
          //   console.log(this.invdtl_list);    
        
          //  });

          this.router.navigate(["./details/store-inventory",{"SKU":`${SKU}`, "storeId":`${storeId}`}]);
      },
        error: error =>{alert("Location Quantity Not Updated"); console.log(error);}
      });

    //return this.getAllLocationsInStoreForSKU(SKU,storeId);

  }


  //constructor() { }
}



