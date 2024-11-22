// essentials-example/routes/EditPostForm.tsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../store";
import { postUpdated, selectPostById } from "../store/posts";

export default function EditPostForm() {
  const { postId } = useParams();
  const post = useSelector(state => selectPostById(state, postId ?? ""));

  const navigate = useNavigate();
  const [title, setTitle] = useState(post?.title ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const dispatch = useDispatch();

  if (postId === undefined || post === undefined) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
}
