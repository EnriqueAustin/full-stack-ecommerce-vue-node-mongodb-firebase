<template>
    <h1>Shopping Cart</h1>
    <div 
        class="product-container" 
        v-for="product in cartItems" 
        :key="product.id"
    >
        <img class="product-image" :src="product.image" />
        <div class="details-warp">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
</template>

<script>
    import { cartItems } from '../temp-data';

    export default {
        name: "ShoppingCartPage",
        data() {
            return {
                cartItems,
            }
        },
    }
</script>