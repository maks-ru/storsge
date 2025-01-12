<template>
  <div class="rounded-lg border-2 border-[#E0E3EE] mb-[40px]">
    <div class="flex justify-between">
      <div class="flex items-start px-[20px] pt-[20px] pb-[50px]">
        <img src="/img/card.png" alt="card" class="pr-5"/>
        <div class="flex flex-col items-start w-[536px]">
          <p class="text-[#969DC3] mb-[15px]">{{ item.type }}</p>
          <h3 class="font-medium mb-[12px]">{{ item.name }}</h3>
          <div class="flex items-center mb-[12px] h-[23px] bg-[#F4F5F9] px-[8px] rounded-md">
            <img src="/img/geo.svg" alt="geo" class="pr-[4px]">
            <p class="text-[#969DC3]">{{ item.city }}</p>
          </div>
          <p class="mb-[12px]">
            <span class="text-[#969DC3] pr-[4px]">Продавец</span>
            {{ item.seller }}
          </p>
          <div class=" flex flex-col items-start bg-[#F4F5F9] p-[8px] rounded-md mb-[12px]">
            <p class="text-[#969DC3] pr-[4px]">Вид товара</p>
            <p class="">

              {{ item.category }}
            </p>
          </div>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div
          class="border-l-2 border-[#E0E3EE] rounded-tl-lg rounded-bl-lg p-[20px]">
        <div class="flex flex-col justify-between h-full">
          <div>
            <p class="text-medium mb-[8px]">{{ item.price }} ₽</p>
            <div class="flex justify-between mb-[8px]">
              <span class="text-[#969DC3]">Количество</span>
              {{ item.quantity }}
              шт
            </div>
            <div>
              <div class="flex justify-between mb-[8px]">
                <span class="text-[#969DC3]">Стоимость за штуку</span>
                {{ item.costPerPiece }} ₽
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <div
                @click="store.addToDeals(item)"
                v-show="route.path === '/' || route.path === '/favorites'"
                class="bg-[#F4F5F9] transition ease-in-out delay-100 hover:bg-[#d3d5de] rounded-md py-[17px] px-[35px] mr-[12px] w-[220px] text-center cursor-pointer">
              <button>
                Добавить в сделки
              </button>
            </div>
            <div
                class="flex items-center">
              <button
                  @click="pay"
                  v-if="showPayButton"
                  :disabled="isPaid"
                  class="bg-[#69C57F] transition ease-in-out delay-100  rounded-md py-[17px] px-[35px] mr-[12px] w-[212px] text-center text-white hover:bg-green-600 disabled:bg-gray-400"
              >
                {{ isPaid ? 'Оплачено' : 'Оплатить' }}
              </button>
              <div
                  @click="store.addToFavorites(item)"
                  class="rounded-md p-[15px] transition ease-in-out
                  delay-100 hover:bg-[#d3d5de] cursor-pointer"
                  :class="route.path === '/favorites' ? 'bg-[#2D3B87]' : 'bg-[#F4F5F9]'"
              >
                <button>
                  <component :is="currentSvg" class="w-[20] h-[20px]"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Item} from '~/types/item';
import {useItemsStore} from "~/store/items";
import HomeSvg from '~/public/img/love.svg'
import FavoritesSvg from '~/public/img/love-f.svg'

const store = useItemsStore();

const route = useRoute();
const isPaid = ref(false);

const currentSvg = computed(() => {
  if (route.path === '/') {
    return HomeSvg
  } else if (route.path === '/favorites') {
    return FavoritesSvg
  } else {
    return HomeSvg
  }
})
defineProps<{
  item: Item,
  showPayButton?: boolean;
}>();


const pay = () => {
  isPaid.value = true;
};

</script>

<style scoped>
.svg-icon {
  width: 50px;
  height: 50px;
}
</style>


