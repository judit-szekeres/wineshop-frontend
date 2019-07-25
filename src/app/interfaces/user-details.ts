export interface UserDetails {
    firstName: '',
    lastName: '',
    email: '',
    currentPassword?: '',
    newPassword?: '',
    confirmNewPassword?:'',
    shippingAddress: {
        street: "",
        city: "",
        id: -1
    },
    billingAddress: {
        street: "",
        city: "",
        id: -1
    }

}
