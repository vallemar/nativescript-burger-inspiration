<script lang="ts" setup>

import {Image as NSImage, Screen} from "@nativescript/core";
import {useCartStore} from "~/store/CartStore";
import Header from "./Header.vue";
import QuickPurchase from "~/components/QuickPurchase.vue";

const props = defineProps({
  item: Object,
  index: Number
})

const cartStore = useCartStore();

function loadedImg(args: any) {
 
}

function addToCart() {
  cartStore.items.push(props.item)
}

</script>

<template>

    <Page actionBarHidden="true"
          androidStatusBarBackground="#FFBC0D"
          class="view-details">
      <GridLayout rows="*, 65">
        <StackLayout>
<!--          <Header/>-->
          <Image
              @loaded="loadedImg"
              class=""
              :sharedTransitionTag="`title_${props.index}`"
              :src="item.img"/>
          <FlexboxLayout class="px-2 flex-col h-full justify-between">
            <StackLayout>
              <label :sharedTransitionTag="`title_${props.index}`" :text="item.name" class="text-3xl text-white font-bold"></label>
              <label :sharedTransitionTag="`price_${props.index}`" :text="`${item.price}${item.currency}`" class="text-xl text-black"></label>
              <label textWrap="true"
                     text="A special flavor! Now hotter, juicier and tastier. See for yourself what makes the flavor of this burger special. Is it its exceptional cheese, its tomato slices? Or could it be its lettuce, its fine sauce or its tender bread?"
                     class=" text-black mt-2" style="line-height: 1"></label>
            </StackLayout>


          </FlexboxLayout>
        </StackLayout>
        <Flexboxlayout row="1" class="justify-center px-2">
          <Button @tap="addToCart" text="Add"
                  class="bg-[#FFBC0D] rounded-full text-white text-2xl w-[60%] h-[50] mb-[15]"></Button>
<!--          <QuickPurchase class="w-[60%] ml-2  mb-[15]"></QuickPurchase>-->
        </Flexboxlayout>
      </GridLayout>
    </Page>

</template>

<style>
.view-details {
  background: rgb(255,188,13);
  background: linear-gradient(185deg, rgba(255,188,13,1) 0%, rgba(255,255,255,1) 90%);
}
</style>
