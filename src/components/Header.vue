<script lang="ts" setup>
import UserProfile from "./UserProfile.vue";
import Cart from "./Cart.vue";

</script>

<template>
  <FlexboxLayout class=" h-[50] justify-between mt-4 px-2 items-center" verticalAlignment="top">
    <UserProfile/>
    <Cart></Cart>
  </FlexboxLayout>
</template>
