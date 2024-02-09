import { Routes } from '@angular/router';
import { InventoryAvailabilityComponent } from './inventory-availability/inventory-availability.component';
import { ReceiveInventoryComponent } from './receive-inventory/receive-inventory.component';
import { MoveInventoryComponent } from './move-inventory/move-inventory.component';
import { StoreFulfillmentComponent } from './store-fulfillment/store-fulfillment.component';
import { InventoryCountComponent } from './inventory-count/inventory-count.component';
import { HomepageComponent } from './homepage/homepage.component';


export const routeConfig: Routes = [
   
    {
        path: '',
        component: HomepageComponent,
        title: 'Home Page'
    },

    {
      path: 'details/inventory-availability',
      component: InventoryAvailabilityComponent,
      title: 'Inventory Availability'
    },
    {
        path: 'details/receive-inventory',
        component: ReceiveInventoryComponent,
        title: 'Receive Inventory'
    },
    {
        path: 'details/move-inventory',
        component: MoveInventoryComponent,
        title: 'Putaway/Move Inventory'
    },
    {
        path: 'details/store-fulfillment',
        component: StoreFulfillmentComponent,
        title: 'Store Fulfillment tasks'
    },
    {
        path: 'details/inventory-count',
        component: InventoryCountComponent,
        title: 'Count tasks'
    }

  ];