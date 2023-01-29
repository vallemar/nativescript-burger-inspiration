<script lang="ts" setup>
import {useCartStore} from "~/store/CartStore";
import {useBottomSheet} from "@nativescript-community/ui-material-bottomsheet/vue3";
import CartDetails from "~/components/CartDetails.vue";

const cartStore = useCartStore();
const {showBottomSheet} = useBottomSheet()

function showDetailCart(){

  showBottomSheet(CartDetails, { transparent: true, ignoreBottomSafeArea: true})
}
</script>

<template>

  <GridLayout class="w-[40] h-[40]" @tap="showDetailCart">
    <Label text="shopping_cart" class="m-icon-round text-white text-xs bg-[#FFBC0D]"></Label>
    <Label :text="cartStore.items.length" v-if="cartStore.items.length !== 0"
           class="bg-red-800 rounded-full w-[18] h-[18] text-white text-center text-xs"
           verticalAlignment="top" horizontalAlignment="right"></Label>
  </GridLayout>

</template>
