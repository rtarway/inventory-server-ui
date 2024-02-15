
export type location_category = 'Backroom'|'FrontShelf'|'ReceivingCart'|'PutawayCart'|'ReplenishmentCart'|'MoveCart';


export type StoreLocation = {

    store_location_id: string;
    category: location_category;
    aisle: string;
    bay: string;
    level: string;
    shelf: string;
    };
    

export type ProductDetails = {

    sku: string;
    description: string;
    short_description: string;
};


export type Address = {

    address_id: string;
    address_type: 'Business'|'Residenttial';
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    phone: string;
};

export type Store = {
    store_id: string; //unique store id
    address: Address;
};

export interface StoreInventory {

    store_inventory_id: string; //unique id of store inventory at a location
    store: string; // unique store id
    product: string; //unique sku
    store_lcoation_id: string;
    quantity: number;
};

export type move_request_adhoc = {
    store_id: string;
    source_store_lcoation_id: string;
    product: {"SKU":string}[];
};

