<!-- views/BookInstanceDetailPage.vue -->
<template>
  <div>
    <h1>ID: {{ bookInstance.id }}</h1>

    <p>
      <strong>Title:</strong> {{ " " }}
      <router-link :to="`/book/${bookInstance.book.id}`">
        {{ bookInstance.book.title }}
      </router-link>
    </p>
    <p><strong>Imprint:</strong> {{ bookInstance.imprint }}</p>
    <p>
      <strong>Status:</strong> {{ " " }}
      <span :style="{ color: bookInstance.color }">
        {{ bookInstance.status }}
      </span>
    </p>
    <p v-if="bookInstance.status !== 'Available'">
      <strong>Due Back:</strong> {{ bookInstance.prettyDueBack }}
    </p>

    <hr />
    <p>
      <router-link :to="`/book-instance/${bookInstance.id}/update`">
        Update book instance
      </router-link>
    </p>
    <p>
      <router-link :to="`/book-instance/${bookInstance.id}/delete`">
        Delete book instance
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { prettifyISODate } from "../utils";
import client from "../utils/client";
import { dummyBook, dummyBookInstance } from "../utils/constants";

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = route.params.id as string;

    const bookInstanceData = ref<BookInstanceDetailApiData["bookInstance"]>({
      ...dummyBookInstance,
      book: dummyBook,
    });

    const bookInstance = computed(() => ({
      ...bookInstanceData.value,
      prettyDueBack: prettifyISODate(bookInstanceData.value.dueBack),
      color:
        bookInstanceData.value.status === "Available"
          ? "green"
          : bookInstanceData.value.status === "Maintenance"
          ? "red"
          : "yellow",
    }));

    client
      .get<BookInstanceDetailApiData>(`/book-instance/${id}`)
      .then(({ data }) => {
        bookInstanceData.value = data.bookInstance;
      })
      .catch(console.error);

    return { bookInstance };
  },
});
</script>
