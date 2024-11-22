<!-- views/GenreDetailPage.vue -->
<template>
  <div>
    <h1>Genre: {{ genre.name }}</h1>

    <div>
      <h2>Books</h2>
      <dl v-if="genreBooks.length > 0">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="book in genreBooks" :key="book.id">
          <dt>
            <router-link :to="`/book/${book.id}`">
              {{ book.title }}
            </router-link>
          </dt>
          <dd>{{ book.summary }}</dd>
        </template>
      </dl>
      <p v-else>This genre has no books</p>
    </div>

    <hr />
    <p>
      <router-link :to="`/genre/${genre.id}/update`">Update genre</router-link>
    </p>
    <p>
      <router-link :to="`/genre/${genre.id}/delete`">Delete genre</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import client from "../utils/client";
import { dummyGenre } from "../utils/constants";

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = route.params.id as string;

    const genreData = ref<GenreDetailApiData["genre"]>(dummyGenre);
    const genreBooksData = ref<GenreDetailApiData["genreBooks"]>([]);

    const genre = computed(() => ({ ...genreData.value }));
    const genreBooks = computed(() =>
      genreBooksData.value.map(book => ({ ...book }))
    );

    client.get<GenreDetailApiData>(`/genre/${id}`).then(({ data }) => {
      genreData.value = data.genre;
      genreBooksData.value = data.genreBooks;
    });

    return { genre, genreBooks };
  },
});
</script>
