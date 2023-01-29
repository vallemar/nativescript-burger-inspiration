<script lang="ts" setup>

import {Image as NSImage, Screen} from "@nativescript/core";
import {useCartStore} from "~/store/CartStore";
import Header from "./Header.vue";
import QuickPurchase from "~/components/QuickPurchase.vue";

const props = defineProps({
  item: Object,
  positionImg: Object,
  size: Object
})

const cartStore = useCartStore();

function loadedImg(args: any) {
  const img = args.object as NSImage
  img.translateX = props.positionImg.x - (props.size.width / 2.5)
  img.translateY = props.positionImg.y - (props.size.height / 2)
  img.width = props.size.width
  img.height = props.size.height

  setTimeout(() => {
    img.animate({
      width: 350,
      height: 350,
      scale: {
        x: 1,
        y: 1
      },
      translate: {
        y: 0,
        x: 0
      },
      duration: 300,
    })
  }, 50)
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
              :src="item.img"/>
          <FlexboxLayout class="px-2 flex-col h-full justify-between">
            <StackLayout>
              <label :text="item.name" class="text-3xl text-white font-bold"></label>
              <label :text="`${item.price}${item.currency}`" class="text-xl text-black"></label>
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
  background: rgb(255, 188, 13);
  background: linear-gradient(118deg, rgba(255, 188, 13, 1) 40%, rgba(255, 255, 255, 1) 79%);
}
</style>
