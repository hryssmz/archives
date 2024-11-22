// essentials-example/routes/NotificationsList.tsx
import { useLayoutEffect } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import classnames from "classnames";
import { useDispatch, useSelector } from "../store";
import {
  allNotificationsRead,
  selectAllNotifications,
} from "../store/notifications";
import { selectAllUsers } from "../store/users";

export default function NotificationsList() {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  useLayoutEffect(() => {
    dispatch(allNotificationsRead());
  });

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {notifications.map(notification => {
        const date = parseISO(notification.date);
        const timeAgo = formatDistanceToNow(date);
        const user = users.find(user => user.id === notification.user);
        const notificationClassname = classnames("notification", {
          new: notification.isNew,
        });

        return (
          <div key={notification.id} className={notificationClassname}>
            <div>
              <b>{user?.name ?? "Unknown User"}</b> {notification.message}
            </div>
            <div title={notification.date}>
              <i>{timeAgo} ago</i>
            </div>
          </div>
        );
      })}
    </section>
  );
}
