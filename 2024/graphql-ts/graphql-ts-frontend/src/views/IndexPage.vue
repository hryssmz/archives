<!-- views/IndexPage.vue -->
<template>
  <div>
    <h1>Local Library Home</h1>
    <p>
      Welcome to <em>LocalLibrary</em>, a very basic Express website developed
      as a tutorial example on the Mozilla Developer Network.
    </p>

    <h2>Dynamic content</h2>
    <p>The library has the following record counts:</p>

    <ul>
      <li><strong>Books:</strong> {{ bookCount }}</li>
      <li><strong>Copies:</strong> {{ bookInstanceCount }}</li>
      <li>
        <strong>Copies available:</strong> {{ bookInstanceAvailableCount }}
      </li>
      <li><strong>Authors:</strong> {{ authorCount }}</li>
      <li><strong>Genres:</strong> {{ genreCount }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const bookCount = ref(0);
    const bookInstanceCount = ref(0);
    const bookInstanceAvailableCount = ref(0);
    const authorCount = ref(0);
    const genreCount = ref(0);

    client
      .get<IndexApiData>("/")
      .then(({ data }) => {
        bookCount.value = data.bookCount;
        bookInstanceCount.value = data.bookInstanceCount;
        bookInstanceAvailableCount.value = data.bookInstanceAvailableCount;
        authorCount.value = data.authorCount;
        genreCount.value = data.genreCount;
      })
      .catch(console.error);

    return {
      bookCount,
      bookInstanceCount,
      bookInstanceAvailableCount,
      authorCount,
      genreCount,
    };
  },
});
</script>
