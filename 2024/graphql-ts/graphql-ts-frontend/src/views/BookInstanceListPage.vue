<!-- views/BookInstanceListPage.vue -->
<template>
  <div>
    <h1>Book Instance List</h1>
    <ul>
      <li v-for="bookInstance in bookInstances" :key="bookInstance.id">
        <router-link :to="`/book-instance/${bookInstance.id}`">
          {{ bookInstance.book.title }} :
          {{ bookInstance.imprint }}
        </router-link>
        -
        <span :style="{ color: bookInstance.color }">
          {{ bookInstance.status }}
        </span>
        <span v-if="bookInstance.status !== 'Available'">
          (Due: {{ bookInstance.prettyDueBack }})
        </span>
      </li>
    </ul>

    <hr />
    <p>
      <router-link :to="`/book-instances/create`">
        Create book instance
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import client from "../utils/client";
import { prettifyISODate } from "../utils";

export default defineComponent({
  setup() {
    const bookInstanceListData = ref<
      BookInstanceListApiData["bookInstanceList"]
    >([]);

    const bookInstances = computed(() =>
      bookInstanceListData.value.map(bookInstance => ({
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
      .get<BookInstanceListApiData>("/book-instances")
      .then(({ data }) => {
        bookInstanceListData.value = data.bookInstanceList;
      })
      .catch(console.error);

    return { bookInstances };
  },
});
</script>
