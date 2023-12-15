<template>
  <div>
    <div
      class="lg:hidden fixed bg-white w-full flex justify-start border-b border-gray-300 py-2 shadow-md"
    >
      <button class="lg:hidden ml-4" @click="toggleMobileMenu">
        <unicon name="bars"></unicon>
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-y-0 left-0 bg-gray-900 text-white h-full w-64 overflow-hidden transition-transform transform ease-in-out duration-300"
    >
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl pl-4 mt-5 mb-5">Intertec App</h2>
          <button
            class="mr-4 flex"
            v-show="isMobileMenuOpen"
            @click="toggleMobileMenu"
          >
            <unicon name="bars" fill="white"></unicon>
          </button>
        </div>

        <div v-for="item in formattedItems" :key="item.id">
          <MenuItem v-if="!item.isHidden" :item="item"></MenuItem>
        </div>
      </div>
    </div>

    <div
      class="hidden lg:flex bg-gray-800 text-white h-full w-64 overflow-hidden"
    >
      <div class="bg-gray-900 text-white h-full w-64 overflow-hidden">
        <div class="mb-4">
          <h2 class="text-2xl pl-4 mt-5 mb-10">Intertec App</h2>

          <div v-for="item in formattedItems" :key="item.id">
            <MenuItem v-if="!item.isHidden" :item="item"></MenuItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuItems } from "../../assets/data/generateData";

import MenuItem from "./MenuItem";

export default {
  name: "SideMenu",
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItems: menuItems,
      isMobileMenuOpen: false,
    };
  },
  computed: {
    formattedItems() {
      const finalItems = [];
      const stackArr = [];

      this.menuItems.forEach((item) => {
        item.children = [];

        if (!item.parentId) {
          finalItems.push(item);
          stackArr.push(item);
        }
      });

      this.menuItems.forEach((item) => {
        if (item.parentId) {
          const parent = stackArr.find(
            (parentItem) => parentItem.id === item.parentId
          );

          if (parent) {
            parent.children.push(item);
            stackArr.push(item);
          }
        }
      });

      return finalItems;
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
