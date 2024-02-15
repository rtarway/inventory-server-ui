import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreInventory } from '../store-inventory';
import { StoreIventoryComponent } from '../store-iventory/store-iventory.component';
import { Router } from '@angular/router';
import { move_request_adhoc } from '../store-inventory';



@Component({
  selector: 'app-store-inventory-detail',
  standalone: true,
  imports: [CommonModule,StoreIventoryComponent],
  templateUrl: './store-inventory-detail.component.html',
  styleUrl: './store-inventory-detail.component.css'
})
export class StoreInventoryDetailComponent {

  @Input() invdtl_list!: StoreInventory[];

  router: Router = inject(Router);

 
 
  callMoveInventory(i:number)
  {
   console.log("calling with"+i);

    this.router.navigate(["/details/move-inventory",{
      "store_id" : this.invdtl_list[i].store,
      "source_store_lcoation_id": this.invdtl_list[i].store_lcoation_id,
      "product": this.invdtl_list[i].product
    }]);  
  }
}

