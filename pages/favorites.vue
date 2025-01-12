<template>
  <div>
    <div class="flex items-center justify-between mb-[40px]">
      <FilterBar />
      <div class="relative">
        <input type="text" placeholder="Поиск..." v-model="store.searchQuery"
               class="w-[274px] placeholder-[#2D3B87] bg-transparent rounded-lg border-2 border-[#E0E3EE] py-[10px] px-5 text-dark-6 outline-none transition"/>
        <button type="submit" class="absolute top-0 end-0 h-full mr-[4px]" @click="">
          <img src="../public/img/button.png">
        </button>
      </div>
    </div>
    <div>
      <ItemCard
          v-for="item in store.filteredFavorites"
          :key="item.id"
          :item="item"
          :show-pay-button="false"
      >
      </ItemCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useItemsStore} from '~/store/items';
import FilterBar from "~/components/FilterBar.vue";
const store = useItemsStore();

</script>
