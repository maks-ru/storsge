import {defineStore} from 'pinia';
import offers from '~/data/offers.json'
import {type Item} from "~/types/item";

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: offers as Item[],
    favorites: [] as Item[],
    deals: [] as Item[],
    filterType: 'Все',
    searchQuery: '',
    isPaid: false,
  }),
  getters: {
    filteredItems: (state) => {
      let filtered = state.items.filter(item =>
        item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );

      if (state.filterType !== 'Все') {
        filtered = filtered.filter(item => item.type === state.filterType);
      }
      return filtered;
    },
    filteredFavorites: (state) => {
      let filtered = state.favorites.filter(item =>
        item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );

      if (state.filterType !== 'Все') {
        filtered = filtered.filter(item => item.type === state.filterType);
      }
      return filtered;
    },

    filteredDeals: (state) => {
      let filtered = state.deals.filter(item =>
        item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );

      if (state.filterType !== 'Все') {
        filtered = filtered.filter(item => item.type === state.filterType);
      }
      return filtered;
    }
  },
  actions: {
    // initializeItems() {
    //   // Mock data
    //   this.items
    // },
    addToFavorites(item: Item) {
      if (!this.favorites.find(i => i.id === item.id)) {
        this.favorites.push(item);
      }
    },
    addToDeals(item: Item) {
      if (!this.deals.find(i => i.id === item.id)) {
        this.deals.push(item);
      }
    },
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },
    setFilterType(type: string) {
      this.filterType = type;
    },
    markAsPaid(dealId: number) {
      const deal = this.deals.find((d) => d.id === dealId);
      if (deal) this.isPaid = true;
    },

  },
});
