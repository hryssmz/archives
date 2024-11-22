// essentials-example/components/ReactionButtons.tsx
import { useDispatch } from "../store";
import { reactionAdded } from "../store/posts";
import type { Post, Reaction } from "../store/posts";

const reactionEmoji: { name: Reaction; emoji: string }[] = [
  { name: "thumbsUp", emoji: "👍" },
  { name: "hooray", emoji: "🎉" },
  { name: "heart", emoji: "❤️" },
  { name: "rocket", emoji: "🚀" },
  { name: "eyes", emoji: "👀" },
];

export interface ReactionButtonsProps {
  post: Post;
}

export default function ReactionButtons({ post }: ReactionButtonsProps) {
  const dispatch = useDispatch();

  return (
    <div>
      {reactionEmoji.map(({ name, emoji }) => (
        <button
          key={name}
          type="button"
          className="muted-button reaction-button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
}
