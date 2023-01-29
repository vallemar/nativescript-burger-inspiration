<script lang="ts" setup>
import {useCartStore} from "~/store/CartStore";
import QuickPurchase from "~/components/QuickPurchase.vue";
import {useBottomSheet} from "@nativescript-community/ui-material-bottomsheet/vue3";

const cartStore = useCartStore();
const {closeBottomSheet} = useBottomSheet()
</script>

<template>
  <StackLayout class="py-4 rounded-t-2xl bg-white">
    <FlexboxLayout class="justify-between items-center p-2">
      <Label text="Your dinner!" class="text-2xl my-1 text-black "></Label>
      <LottieView height="85" src="~/assets/burger.json" :loop="true" :autoPlay="true"></LottieView>
    </FlexboxLayout>
    <StackLayout v-if="cartStore.cart && cartStore.cart.items.length > 0">
      <StackLayout class="rounded-2xl  pl-2">
        <FlexboxLayout v-for="(item, i) in cartStore.cart.items" :key="i"
                       class="border-b-2 my-2 py-2 pr-2 items-center justify-between">
          <StackLayout orientation="horizontal">
            <Label :text="item.amount"
                   class="text-lg px-2 rounded text-white bg-[#FFBC0D] text-center"></Label>
            <Label :text="item.name"
                   class="text-lg ml-2 text-black"></Label>
          </StackLayout>
          <Label :text="`${item.totalPrice.toFixed(2)}${item.currency}`"
                 class="text-lg px-2 rounded text-black text-center"></Label>
        </FlexboxLayout>
        <FlexboxLayout class=" my-2 py-2 items-center justify-between pr-2">
          <Label text="Total"
                 class="text-lg rounded text-black  text-center"></Label>
          <Label :text="`${cartStore.cart.totalPrice.toFixed(2)}${cartStore.cart.currency}`"
                 class="text-lg px-2 rounded text-black  text-center"></Label>
        </FlexboxLayout>
      </StackLayout>
      <StackLayout class="px-4 pb-2">
        <Button text="Buy" class="mt-12 mb-2 w-[60%] h-[50] bg-[#FFBC0D] rounded-full text-white text-2xl"></Button>
      </StackLayout>
    </StackLayout>
    <StackLayout v-else>
      <Label text="Your shopping cart is empty"
             class="text-lg px-2 rounded text-black text-center"></Label>
      <FlexboxLayout class="justify-center">
        <Button text="Continue buying"
                @tap="closeBottomSheet"
                class="my-12 h-[45] px-2 text-lg capitalize bg-[#FFBC0D] rounded-full text-white "></Button>
      </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>
