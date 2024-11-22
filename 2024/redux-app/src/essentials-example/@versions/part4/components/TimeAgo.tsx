// essentials-example/components/TimeAgo.tsx
import { formatDistanceToNow, parseISO } from "date-fns";

export interface TimeAgoProps {
  timestamp: string;
}

export default function TimeAgo({ timestamp }: TimeAgoProps) {
  const timeAgo = !timestamp
    ? ""
    : `${formatDistanceToNow(parseISO(timestamp))} ago`;

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}
