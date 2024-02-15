import { Component, Input, inject } from '@angular/core';
import { move_request_adhoc } from '../store-inventory';
import { FormsModule } from '@angular/forms';
import { StoreInventoryService } from '../store-inventory.service'
import { StoreInventory } from '../store-inventory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-move-inventory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './move-inventory.component.html',
  styleUrl: './move-inventory.component.css'
})
export class MoveInventoryComponent {

  storeInventoryService = inject(StoreInventoryService);
  invdtl_list: StoreInventory[] = [];
  move_details!: move_request_adhoc[];
  private route:ActivatedRoute;
  SKU:string='';
  storeId:string='';
  fromLocationId:string='';
  toLocationId:string='';
  quantity:number=1;

  constructor(route: ActivatedRoute) {
    this.route = route;
    console.log(this.route.snapshot.paramMap);
    
    this.SKU=this.route.snapshot.paramMap.get("product")!;
    this.storeId=this.route.snapshot.paramMap.get("store_id")!;
    this.fromLocationId=this.route.snapshot.paramMap.get("source_store_lcoation_id")!;
  }
 

 

  

  onSubmit()
{
    alert('submit clicked');
    this.storeInventoryService.moveInventoryInStore(this.SKU, this.storeId, this.fromLocationId, this.toLocationId, this.quantity).then( (fetched_storeInventory: StoreInventory[]) => {
    this.invdtl_list=fetched_storeInventory;
    console.log(this.invdtl_list);    
});



}


}
