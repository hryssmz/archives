<!-- App.vue -->
<template>
  <div :style="{ width: '80%', margin: 'auto' }">
    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: { NavigationBar },
});
</script>

<style scoped></style>
