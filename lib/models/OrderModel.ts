import mongoose from "mongoose"
export type OrderItem = {
    name: string
    slug: string
    qty: number
    image: string
    price: number
    
}

export type ShippingAddress={
    fullName:string
    address:string
    city:string
    postalCode:string
    country:string
}





const orderSchema = new mongoose.Schema(
    {
        items: [],
        itemsPrice: { type: Number, required: true},
        taxPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        shippingAddress: { type: String, required: true },
        paymentMethod: { type:String, required: true},
        user: { type: String, required: true, default: 0 },

    },
    {
        timestamps: true
    }
)

const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema)
export default OrderModel

export type Order = {
    _id?: string
    name: string
    slug: string
    image: string
    banner?: string
    price: number
    brand: string
    description: string
    category: string
    rating: number
    numReviews: number
    countInStock: number
    colors?: []
    sizes?: []
} 