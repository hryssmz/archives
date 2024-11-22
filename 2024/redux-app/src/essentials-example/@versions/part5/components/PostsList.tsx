// essentials-example/components/PostsList.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { fetchPosts, selectAllPosts } from "../store/posts";
import PostExcerpt from "./PostExcerpt";
import Spinner from "./Spinner";

export interface PostsListProps {}

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {postStatus === "loading" && <Spinner text="Loading..." />}
      {postStatus === "succeeded" &&
        orderedPosts.map(post => <PostExcerpt key={post.id} post={post} />)}
      {postStatus === "failed" && <div>{error}</div>}
    </section>
  );
}
