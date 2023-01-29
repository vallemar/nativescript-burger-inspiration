<script lang="ts" setup>
import {ref, $navigateBack} from "nativescript-vue";
import {computed, onMounted, toRaw, watch} from "vue";
import {View} from "@nativescript/core";

const props = defineProps({
  img: String,
  index: {
    type: Number,
    default: 0
  },
  selected: Boolean
})
const refItem = ref()
const durationAnimation = 200
watch(() => props.selected, (oldValue, newValue) => {
  checkSelection();
});

function checkSelection() {
  if (props.selected) {
    (toRaw(refItem.value.nativeView) as View).animate({
      scale: {
        x: 1.2,
        y: 1.2
      },
      duration: durationAnimation
    })
  } else if (!props.selected) {
    (toRaw(refItem.value.nativeView) as View).animate({
      scale: {
        x: 1,
        y: 1
      },
      duration: durationAnimation
    })
  }
}

onMounted(() => {
  setTimeout(() => checkSelection(), 250)
})
const translateY = computed(() => props.index < 3 ? 15 : 15 + (props.index * 13));

</script>

<template>
  <FlexboxLayout ref="refItem" verticalAlignment="top"
                 class="rounded-full bg-[#FDCC0077] items-center justify-center  mx-3 h-[65] w-[65]"
                 :style="{ 'margin-top': translateY  }"
  >
    <Image
        stretch="aspectFill"
        class="h-[50] w-[50]"
        :src="props.img"/>
  </FlexboxLayout>
</template>
