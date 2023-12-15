<template>
  <div v-if="!item.isHidden">
    <div
      :style="indent"
      class="py-3 pl-4 flex items-center cursor-pointer"
      :class="{
        'border-b': level === 0,
        'bg-gray-800': level === 0,
        'border-gray-700': level === 0,
      }"
      @click="toggleDropdown"
    >
      <span>{{ item.name }}</span>
      <span v-if="item.children.length" class="ml-auto flex mr-4 text-xs">
        <unicon v-if="isDropdownOpen" name="angle-up" fill="white"></unicon>
        <unicon v-else name="angle-down" fill="white"></unicon>
      </span>
    </div>
    <div v-if="isDropdownOpen">
      <MenuItem
        v-for="subitem in item.children"
        :key="subitem.id"
        :item="subitem"
        :level="level + 1"
      ></MenuItem>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    indent() {
      return { "margin-left": `${this.level * 30}px` };
    },
  },
  methods: {
    toggleDropdown() {
      if (this.item.children.length > 0) {
        this.isDropdownOpen = !this.isDropdownOpen;
      }
    },
  },
};
</script>
