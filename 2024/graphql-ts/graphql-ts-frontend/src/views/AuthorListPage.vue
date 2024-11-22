<!-- views/AuthorListPage.vue -->
<template>
  <div>
    <h1>Author List</h1>
    <ul>
      <li v-for="author in authors" :key="author.id">
        <router-link :to="`/author/${author.id}`">
          {{ author.name }}
        </router-link>
        ({{ author.lifespan }})
      </li>
    </ul>

    <hr />
    <p>
      <router-link :to="`/authors/create`">Create author</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { prettifyISODate } from "../utils";
import client from "../utils/client";

export default defineComponent({
  setup() {
    const authorListData = ref<AuthorListApiData["authorList"]>([]);

    const authors = computed(() =>
      authorListData.value.map(author => ({
        ...author,
        name: `${author.firstName}, ${author.familyName}`,
        lifespan: `${prettifyISODate(author.dateOfBirth)} - ${prettifyISODate(
          author.dateOfDeath
        )}`,
      }))
    );

    client
      .get<AuthorListApiData>("/authors")
      .then(({ data }) => {
        authorListData.value = data.authorList;
      })
      .catch(console.error);

    return { authors };
  },
});
</script>
