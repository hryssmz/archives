// essentials-example/routes/Home.tsx
import AddPostForm from "../components/AddPostForm";
import PostsList from "../components/PostsList";

export default function Home() {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}
