<template>
  <div class="p-[12px] bg-[#E0E3EE] rounded-lg border-2 border-[#E0E3EE]">
    <div class="filter-buttons flex items-center gap-[12px] text-[#969DC3] font-normal">
      <button
          v-for="type in types"
          :key="type.value"
          @click="store.setFilterType(type.value)"
          class="px-4 py-2 rounded"
          :class="store.filterType === type.value ? 'text-[#2D3B87]' : ''"
      >
        {{ type.label }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useItemsStore} from '~/store/items';

const store = useItemsStore();

const types = [
  {label: 'Все', value: 'Все'},
  {label: 'Аукцион', value: 'Аукцион'},
  {label: 'Прямые продажи', value: 'Прямые продажи'}
];
</script>