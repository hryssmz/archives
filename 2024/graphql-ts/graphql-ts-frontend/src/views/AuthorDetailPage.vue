<!-- views/AuthorDetailPage.vue -->
<template>
  <div>
    <h1>Author: {{ author.name }}</h1>
    <p>{{ author.lifespan }}</p>

    <div>
      <h2>Books</h2>
      <dl v-if="authorsBooks.length > 0">
        <!-- eslint-disable-next-line vue/no-v-for-template-key -->
        <template v-for="book in authorsBooks" :key="book.id">
          <dt>
            <router-link :to="`/book/${book.id}`">
              {{ book.title }}
            </router-link>
          </dt>
          <dd>{{ book.summary }}</dd>
        </template>
      </dl>
      <p v-else>This author has no books.</p>
    </div>

    <hr />
    <p>
      <router-link :to="`/author/${author.id}/update`">
        Update author
      </router-link>
    </p>
    <p>
      <router-link :to="`/author/${author.id}/delete`">
        Delete author
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { prettifyISODate } from "../utils";
import client from "../utils/client";
import { dummyAuthor } from "../utils/constants";

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = route.params.id as string;

    const authorData = ref<AuthorDetailApiData["author"]>(dummyAuthor);
    const authorsBooksData = ref<AuthorDetailApiData["authorsBooks"]>([]);

    const author = computed(() => ({
      ...authorData.value,
      name: `${authorData.value.firstName}, ${authorData.value.familyName}`,
      lifespan: `${prettifyISODate(
        authorData.value.dateOfBirth
      )} - ${prettifyISODate(authorData.value.dateOfDeath)}`,
    }));
    const authorsBooks = computed(() =>
      authorsBooksData.value.map(book => ({ ...book }))
    );

    client
      .get<AuthorDetailApiData>(`/author/${id}`)
      .then(({ data }) => {
        authorData.value = data.author;
        authorsBooksData.value = data.authorsBooks;
      })
      .catch(console.error);

    return { author, authorsBooks };
  },
});
</script>
