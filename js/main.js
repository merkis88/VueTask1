let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        inStock: true,
        cart: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],
    },
    methods: {
        addToCart() {
            if (this.inStock) {
                this.cart += 1;
            }
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
})
