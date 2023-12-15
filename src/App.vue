<template>
  <SideMenu />

  <div class="flex-auto text-center mt-5">
    <h1 class="mt-16 mb-2 text-xl font-bold">Some component here</h1>
    <h3 class="text-gray-500">router-view could go here</h3>
  </div>
</template>

<script>
import SideMenu from "./components/menu/SideMenu";

export default {
  name: "App",
  components: {
    SideMenu,
  },
};
</script>
