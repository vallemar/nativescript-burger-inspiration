<script lang="ts" setup>

import { ref } from "vue";
import { Image as NSImage, PageTransition, Screen, SharedTransition, SharedTransitionConfig, View } from "@nativescript/core";
import PreviewItem from "~/components/PreviewItem.vue";
import Details from "./Details.vue"
import { $navigateTo } from "nativescript-vue";
import Header from "./Header.vue";
import { Item } from "~/types";

const currentCard = ref(0);
let page;
const items: Item[] = [
  {
    id: 1,
    name: "Double VEGETAL 🌱",
    price: 16.50,
    currency: "€",
    img: "~/assets/vegetal.png"
  },
  {
    id: 2,
    name: "Double egg 🥚🥚",
    price: 18.10,
    currency: "€",
    img: "~/assets/egg.png"
  },
  {
    id: 3,
    name: "Triple Chicken 🐔",
    price: 12.25,
    currency: "€",
    img: "~/assets/triple.png"
  },
  {
    id: 4,
    name: "Basic 🍔",
    price: 5.50,
    currency: "€",
    img: "~/assets/basic.png"
  },

]

const onChangeSelected = (args: any) => {
  currentCard.value = args.value;
}

const onSelect = (index: number) => {
  currentCard.value = index;
}

function loadedPage(args: { object: any }) {
  page = args.object
}

function goTo(args: any, index: number) {
  const img = args.object as NSImage
  const item = items[index];
/*   const config: SharedTransitionConfig = {
      pageStart: {
        x: 0,
        y: 300,
        // Try commenting above values and uncommenting these...
        // x: 0,
        // y: -300,
      },
      pageEnd: {
        // use nice linear duration on Android
        duration: global.isAndroid ? 500 : 500,
        // use custom spring on iOS
        spring: { tension: 60, friction: 8, mass: 4 },
        opacity: 1,
     
      },
      pageReturn: {
        duration: 500,
        x: -Screen.mainScreen.widthDIPs,
        y: 0,
        opacity: 0,
      },
      interactive:{
        dismiss:{
        finishThreshold:0.5
        }
      }
  }; */
  $navigateTo(Details, {
    transition: SharedTransition.custom(new PageTransition()),
    props: {
      item,
      index
    },
    frame: "main-content"

  })
}
</script>

<template>
  <Frame>
    <Page actionBarHidden="true" androidStatusBarBackground="#FFBC0D" class="bg-[#FFBC0D]" @loaded="loadedPage">

      <GridLayout class="page " rows="auto, *">
        <StackLayout>
          <Header />
        </StackLayout>

        <StackLayout row="1">
          <Frame id="main-content" row="1">
            <Page actionBarHidden="true" class="bg-[#FFBC0D]">
              <GridLayout rows="auto, *" height="100%">
                <GridLayout class="px-2 mt-12" rows="auto, auto" columns="auto, auto">
                  <Label row="0" col="0" text="Good" class="text-4xl font-bold text-black"></Label>
                  <Label row="0" col="1" text="Food," class="mx-2 text-4xl font-bold text-white"></Label>
                  <Label row="1" col="0" text="Good" class="text-4xl font-bold text-white mt-2"></Label>
                  <Label row="1" col="1" text="Mood." class="mx-2 text-4xl font-bold text-black mt-2"></Label>
                </GridLayout>
                <FlexboxLayout row="1" verticalAlignment="bottom" class="pt-2">
                  <FlexboxLayout class=" flex-col justify-between bg-[#FEFEFE] w-full"
                    :style="[`border-top-right-radius: ${Screen.mainScreen.widthDIPs / 4}`]">
                    <StackLayout verticalAlignment="top" orientation="horizontal" class="" height="200">
                      <PreviewItem v-for="(item, i) in items" :key="i" :img="item.img" :index="i"
                        :selected="currentCard === i" @tap="onSelect(i)" ignoreTouchAnimation="true"></PreviewItem>
                    </StackLayout>
                    <ContentView>
                      <Pager height="400" @selectedIndexChange="onChangeSelected" :selectedIndex="currentCard"
                        transformers="stack">
                        <PagerItem v-for="(item, i) in items" :key="i" :index="i" class="android:m-12">
                          <StackLayout orientation="vertical" @tap="goTo($event, i)">
                            <FlexboxLayout
                              class="w-[100%] h-[70%] rounded-3xl justify-center items-center flex-col bg-[#FDCC0077] py-2">
                              <Image :src="item.img" :sharedTransitionTag="`image_${i}`" />
                            </FlexboxLayout>
                            <Label :text="item.name" class="font-bold text-lg text-center mt-1 text-black"
                              :sharedTransitionTag="`title_${i}`"></Label>
                            <Label :text="`${item.price}${item.currency}`" class="font-bold text-gray-400 text-center"
                              :sharedTransitionTag="`price_${i}`"></Label>
                          </StackLayout>
                        </PagerItem>
                      </Pager>
                    </ContentView>
                  </FlexboxLayout>
                </FlexboxLayout>
              </GridLayout>
            </Page>
          </Frame>
        </StackLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>
