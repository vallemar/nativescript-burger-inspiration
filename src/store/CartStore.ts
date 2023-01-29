import {defineStore} from "pinia";
import {ref} from "nativescript-vue";
import {Item} from "~/types";
import {computed} from "vue";


export const useCartStore = defineStore('cart', () => {
    const items = ref<Item[]>([]);
    const cart = computed(() => {
        const carGroupById = items.value.reduce((acc: any, curr) => {
            if (!acc[curr.id]) acc[curr.id] = [];
            acc[curr.id].push(curr);
            return acc;
        }, {});
        return {
            currency: items.value[0].currency,
            items: Object.keys(carGroupById).map(id => ({
                id,
                name: carGroupById[id][0].name,
                currency: carGroupById[id][0].currency,
                price: carGroupById[id][0].price,
                img: carGroupById[id][0].img,
                amount: carGroupById[id].length,
                totalPrice: carGroupById[id].length * carGroupById[id][0].price,
            })),
            totalPrice: items.value.reduce((a: number, b: Item) => a + b.price, 0)
        }
    })
    return {items, cart}
})