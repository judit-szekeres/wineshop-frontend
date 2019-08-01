export interface Orders {
    items: ItemDetails[],
    shippingAddress: {
    	street: string,
        city: string,
        country: string,
    },
    billingAddress: {
    	street: string,
        city: string,
        country: string,
    },
     orderTime: string,
}

export interface ItemDetails {
    itemName: string,
    grossItemPrice: number,
    quantity: number,
    wineId: number,
}
