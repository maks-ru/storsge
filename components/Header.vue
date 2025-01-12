<template>
  <div class="mb-[77px]">
    <div class="h-10 bg-[#E0E3EE] rounded-b-lg mb-6"></div>
    <div class=" flex items-center justify-end gap-1">
      <div
          class="h-[50px]"
          :class="getButtonClass('/favorites')"
      >
        <div class="py-[6px] px-[7px] flex flex-col items-center">
          <img src="/img/love.svg" alt="love"/>
          <NuxtLink to="/favorites" class="font-medium">Избранное</NuxtLink>
        </div>
      </div>
      <div
          class="w-[86px] h-[50px]"
          :class="getButtonClass('/')"
      >
        <div class="py-[6px] flex flex-col items-center">
          <img src="/img/box.svg" alt="box" class=""/>
          <NuxtLink to="/" class="font-medium">Склад</NuxtLink>
        </div>
      </div>
      <div
          class="w-[86px] h-[50px]"
          :class="getButtonClass('/deals')"
      >
        <div class="py-[6px] flex flex-col items-center">
          <img src="/img/bag.svg" alt="bag" class=""/>
          <NuxtLink to="/deals" class="font-medium">Сделки</NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import {useItemsStore} from '~/store/items';

const store = useItemsStore();
const route = useRoute()

const getButtonClass = (path) => {
  const isActive = route.path === path
  return `rounded-lg ${
      isActive ? 'bg-[#F4F5F9]' : 'bg-white'
  }`
}

const props = defineProps({
  favorites: Object,
});

</script>