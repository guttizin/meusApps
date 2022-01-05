const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            // description: 'Descrição do produto 1',
            // price: 'R$ 10,00',
            // // add image from socks vue tutorial
            // image: './assets/images/socks_green.jpg',
            // image: 'https://picsum.photos/200/300',
            url: 'https://google.com',
            inventory: 2,
            details: ['80% cotton', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            selectedVariant: 0,
        }
    },
    methods: {
        addToCart() {
            // alert('Produto adicionado ao carrinho');
            // Check if is possible to add more items
            if (this.inventory > 0) {
                this.cart += 1;
                this.inventory -= 1;
            } else {
                this.inventory = 0;
                this.inStock = false;
                alert('Produto esgotado');
            }
            this.$emit('add-to-cart', this.product);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            this.inventory = this.variants[this.selectedVariant].quantity;
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0 ? true : false;
        },
        description() {
            return this.brand + ' ' + this.product + ' ' + this.variants[this.selectedVariant].color;
        }
    }
});