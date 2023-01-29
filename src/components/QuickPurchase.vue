<script lang="ts" setup>
/*import {useCartStore} from "~/store/CartStore";
import {useBottomSheet} from "@nativescript-community/ui-material-bottomsheet/vue3";
import CartDetails from "~/components/CartDetails.vue";
import {
  GestureHandlerStateEvent as NSGestureHandlerStateEvent,
  GestureHandlerTouchEvent as NSGestureHandlerTouchEvent,
  GestureStateEventData as NSGestureStateEventData,
  GestureTouchEventData as NSGestureTouchEventData,
  HandlerType as NSHandlerType,
  Manager as NSManager
} from '@nativescript-community/gesturehandler';
import {ref, toRaw} from "vue";
import {View} from "@nativescript/core";

enum GestureState {
  CANCELLED = 3,
  END = 5
}

const refTargetBuy = ref()
const manager = NSManager.getInstance();

const finishTarget = (viewBuy: View, targetBuy: View) => targetBuy && targetBuy.getLocationInWindow().x <= viewBuy.getLocationInWindow().x
const getGestureHandler = () => {
  const gestureHandler = manager.createGestureHandler(NSHandlerType.PAN, 10, {
    shouldCancelWhenOutside: false
  });
  gestureHandler.on(NSGestureHandlerTouchEvent, onGestureTouch as () => void);
  gestureHandler.on(NSGestureHandlerStateEvent, onGestureState as () => void);
  return gestureHandler;
}

function onGestureTouch(args: NSGestureTouchEventData) {
  const {state, extraData, view} = args.data;
  if (view) {
    const target: View = toRaw(refTargetBuy.value.nativeView)
    if (finishTarget(view, target)) {

    }else{
      view.translateX = extraData.translationX;
    }

  }
}

function onGestureState(args: NSGestureStateEventData) {
  const {state, prevState, extraData, view} = args.data;
  if (state === GestureState.END || state === GestureState.CANCELLED) {
    const target: View = toRaw(refTargetBuy.value.nativeView)
    if (finishTarget(view, target)) {

    } else {
      view.animate({
        translate: {
          x: 0, y: 0
        },
        duration: 250
      })
    }

  }
}

function loadedButton(args: any) {
  getGestureHandler().attachToView(args.object)
}*/

</script>

<template>
<!--  <GestureRootView height="50">
    <GridLayout class="h-[50] bg-[#FFBC0D] rounded-full box-shadow">
      <Label text="Quick purchase" class="text-lg text-black" horizontalAlignment="center"
             verticalAlignment="center"></Label>

      <FlexboxLayout @loaded="loadedButton" class="w-[50] bg-white rounded-full border-2 items-center justify-center"
                     horizontalAlignment="left">
        <Label text="keyboard_double_arrow_right" class="m-icon-round"></Label>
      </FlexboxLayout>

      <FlexboxLayout ref="refTargetBuy" class="w-[50] bg-white rounded-full items-center justify-center opacity-50"
                     horizontalAlignment="right">
        <Label text="lunch_dining" class="m-icon-round"></Label>
      </FlexboxLayout>
    </GridLayout>
  </GestureRootView>-->
</template>
