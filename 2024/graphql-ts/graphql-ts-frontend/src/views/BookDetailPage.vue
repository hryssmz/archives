<!-- views/BookDetailPage.vue -->
<template>
  <div>
    <h1>Title: {{ book.title }}</h1>

    <p>
      <strong>Author:</strong>{{ " " }}
      <router-link :to="`/author/${book.author.id}`">
        {{ book.author.name }}
      </router-link>
    </p>
    <p><strong>Summary:</strong> {{ book.summary }}</p>
    <p><strong>ISBN:</strong> {{ book.isbn }}</p>
    <p>
      <strong>Genre:</strong>{{ " " }}
      <!-- eslint-disable-next-line vue/no-v-for-template-key -->
      <template v-for="(genre, i) in book.genres" :key="genre.id">
        <router-link :to="`/genre/${genre.id}`">{{ genre.name }}</router-link>
        <span v-if="i < book.genres.length - 1">, </span>
      </template>
    </p>

    <div>
      <h2>Copies</h2>

      <div v-if="bookInstances.length > 0">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="bookInstance in bookInstances" :key="bookInstance.id">
          <hr />
          <span :style="{ color: bookInstance.color }">
            {{ bookInstance.status }}
          </span>
          <p><strong>Imprint:</strong> {{ bookInstance.imprint }}</p>
          <p v-if="bookInstance.status !== 'Available'">
            <strong>Due back:</strong> {{ bookInstance.prettyDueBack }}
          </p>
          <p>
            <strong>Id:</strong> {{ " " }}
            <router-link :to="`/book-instance/${bookInstance.id}`">
              {{ bookInstance.id }}
            </router-link>
          </p>
        </template>
      </div>
      <p v-else>There are no copies of this book in the library.</p>
    </div>

    <hr />
    <p>
      <router-link :to="`/book/${book.id}/update`">Update book</router-link>
    </p>
    <p>
      <router-link :to="`/book/${book.id}/delete`">Delete book</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { prettifyISODate } from "../utils";
import { dummyAuthor, dummyBook } from "../utils/constants";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = route.params.id as string;

    const bookData = ref<BookDetailApiData["book"]>({
      ...dummyBook,
      author: dummyAuthor,
      genres: [],
    });
    const bookInstancesData = ref<BookDetailApiData["bookInstances"]>([]);

    const book = computed(() => ({
      ...bookData.value,
      author: {
        ...bookData.value.author,
        name: `${bookData.value.author.firstName}, ${bookData.value.author.familyName}`,
      },
    }));
    const bookInstances = computed(() =>
      bookInstancesData.value.map(bookInstance => ({
        ...bookInstance,
        prettyDueBack: prettifyISODate(bookInstance.dueBack),
        color:
          bookInstance.status === "Available"
            ? "green"
            : bookInstance.status === "Maintenance"
            ? "red"
            : "yellow",
      }))
    );

    client
      .get<BookDetailApiData>(`/book/${id}`)
      .then(({ data }) => {
        bookData.value = data.book;
        bookInstancesData.value = data.bookInstances;
      })
      .catch(console.error);

    return { book, bookInstances };
  },
});
</script>
