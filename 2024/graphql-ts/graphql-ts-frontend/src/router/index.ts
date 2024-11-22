// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "../views/IndexPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import UnderDevelopmentPage from "../views/UnderDevelopmentPage.vue";
import AuthorListPage from "../views/AuthorListPage.vue";
import AuthorDetailPage from "../views/AuthorDetailPage.vue";
import BookListPage from "../views/BookListPage.vue";
import BookDetailPage from "../views/BookDetailPage.vue";
import BookInstanceListPage from "../views/BookInstanceListPage.vue";
import BookInstanceDetailPage from "../views/BookInstanceDetailPage.vue";
import GenreListPage from "../views/GenreListPage.vue";
import GenreDetailPage from "../views/GenreDetailPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "", component: IndexPage },
  { path: "/authors", component: AuthorListPage },
  { path: "/authors/create", component: UnderDevelopmentPage },
  { path: "/author/:id", component: AuthorDetailPage },
  { path: "/author/:id/update", component: UnderDevelopmentPage },
  { path: "/author/:id/delete", component: UnderDevelopmentPage },
  { path: "/books", component: BookListPage },
  { path: "/books/create", component: UnderDevelopmentPage },
  { path: "/book/:id", component: BookDetailPage },
  { path: "/book/:id/update", component: UnderDevelopmentPage },
  { path: "/book/:id/delete", component: UnderDevelopmentPage },
  { path: "/book-instances", component: BookInstanceListPage },
  { path: "/book-instances/create", component: UnderDevelopmentPage },
  { path: "/book-instance/:id", component: BookInstanceDetailPage },
  { path: "/book-instance/:id/update", component: UnderDevelopmentPage },
  { path: "/book-instance/:id/delete", component: UnderDevelopmentPage },
  { path: "/genres", component: GenreListPage },
  { path: "/genres/create", component: UnderDevelopmentPage },
  { path: "/genre/:id", component: GenreDetailPage },
  { path: "/genre/:id/update", component: UnderDevelopmentPage },
  { path: "/genre/:id/delete", component: UnderDevelopmentPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
