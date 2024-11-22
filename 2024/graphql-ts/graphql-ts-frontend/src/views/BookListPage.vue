<!-- views/BookListPage.vue -->
<template>
  <div>
    <h1>Book List</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="`/book/${book.id}`">
          {{ book.title }}
        </router-link>
      </li>
    </ul>

    <hr />
    <p>
      <router-link :to="`/books/create`">Create book</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const bookListData = ref<BookListApiData["bookList"]>([]);

    const books = computed(() =>
      bookListData.value.map(book => ({
        ...book,
        authorName: `${book.author.firstName}, ${book.author.familyName}`,
      }))
    );

    client
      .get<BookListApiData>("/books")
      .then(({ data }) => {
        bookListData.value = data.bookList;
      })
      .catch(console.error);

    return { books };
  },
});
</script>
