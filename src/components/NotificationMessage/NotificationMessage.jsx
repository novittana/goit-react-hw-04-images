import css from './NotificationMessage.module.css'

export function NotificationMessage
    ({ children }) {
     return <p className={css.notification_message}>{children}</p>;
 }

