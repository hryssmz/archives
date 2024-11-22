<!-- components/NavigationBar.vue -->
<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/books">All books</router-link>
      </li>
      <li>
        <router-link to="/authors">All authors</router-link>
      </li>
      <li>
        <router-link to="/genres">All genres</router-link>
      </li>
      <li>
        <router-link to="/book-instances">All book instances</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
