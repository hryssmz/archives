// essentials-example/components/PostsList.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import { fetchPosts, selectPostIds } from "../store/posts";
import PostExcerpt from "./PostExcerpt";
import Spinner from "./Spinner";

export interface PostsListProps {}

export default function PostsList() {
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {postStatus === "loading" && <Spinner text="Loading..." />}
      {postStatus === "succeeded" &&
        orderedPostIds.map(postId => (
          <PostExcerpt key={postId} postId={postId} />
        ))}
      {postStatus === "failed" && <div>{error}</div>}
    </section>
  );
}
