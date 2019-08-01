export interface CheckoutDetails {
    firstName: string;
    lastName: string;
    addresses: [
        {
            street: string;
            city: string;
            id: number;
        },
        {
            street: string;
            city: string;
            id: number;
        }
    ];
}