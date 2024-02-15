import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { StoreInventoryDetailComponent } from '../store-inventory-detail/store-inventory-detail.component';
import { StoreInventoryService } from '../store-inventory.service';
import { StoreInventory } from '../store-inventory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-iventory',
  standalone: true,
  imports: [CommonModule, FormsModule, StoreInventoryDetailComponent ],
  templateUrl: './store-iventory.component.html',
  styleUrl: './store-iventory.component.css'
})

export class StoreIventoryComponent{


  
  storeInvService = inject(StoreInventoryService);
  SKU = '';
  storeId = 'Store001';
  invdtl_list:  StoreInventory[] = [];

  constructor(activatedRoute: ActivatedRoute){
    
    
    console.log("parammap"+activatedRoute.snapshot.paramMap.toString());
    this.SKU = activatedRoute.snapshot.paramMap.get("SKU")!;
    this.storeId = activatedRoute.snapshot.paramMap.get("storeId")!;


    
    // this.SKU=this.route.snapshot.paramMap.get("product")!;
    // this.storeId=this.route.snapshot.paramMap.get("store_id")!;
    // this.fromLocationId=this.route.snapshot.paramMap.get("source_store_lcoation_id")!;


  }

  

  onSubmit(){
    alert(this.SKU);
    alert(this.storeId);
    this.storeInvService.getAllLocationsInStoreForSKU(this.SKU, this.storeId).then( (fetched_storeInventory: StoreInventory[]) => {
    this.invdtl_list=fetched_storeInventory;
    console.log(this.invdtl_list);    

   });

   
}

  
}


// export class HomeComponent {

//   housingLocationList: HousingLocation[] = [];
//   housingService: HousingService = inject(HousingService);

//   filteredLocationList: HousingLocation[] = [];
  
//   constructor() {
//     this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
//       this.housingLocationList = housingLocationList;
//       this.filteredLocationList = housingLocationList;
//     });
//   }

    

//   filterResults(text: string) {
//     if (!text) {
//       this.filteredLocationList = this.housingLocationList;
//       return;
//     }

//     this.filteredLocationList = this.housingLocationList.filter(
//       housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
//     );
//   }
  

// }