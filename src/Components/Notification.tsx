import {useEffect, useRef, SyntheticEvent} from 'react'
import {MdClose} from 'react-icons/md'

import {gsap, Power4} from 'gsap';

import styles from '../Css/Notification.module.css'

const TOAST_TIME_MS = 4500 as const;

type Props = {
    timer?: number;
    label: string;
    title: string,
    type: string,
    setmessage?:any
}

const Notification = ({timer, label, title, type, setmessage}: Props) => {
    const notification = useRef<HTMLOutputElement>(null);

    useEffect(() => {
        showNotif()
        setTimeout(() => {
            hideNotif()
            setMessageToNone()
        }, 10000);
        // eslint-disable-next-line
    }, [setmessage])
    
    const showNotif = () => {
        gsap.from(notification.current, {duration:0.75, ease: Power4.easeInOut, y:'100%', opacity:0})
    }

    const hideNotif = () => {
        gsap.to(notification.current, {duration:0.75, ease: Power4.easeInOut, y:'100%', opacity:0})
    }

    const onClose = (e: SyntheticEvent | null) => {
        if (e) e.preventDefault();
        hideNotif()
        if (setmessage) {
            setMessageToNone()
        }
    }

    const closeAterMouseLeave = (e: SyntheticEvent | null) => {
        if (e) e.preventDefault();
        setTimeout(() => {
            hideNotif() 
        }, 1500);
    }

    const setMessageToNone = () => {
        setTimeout(() => {
            setmessage('')    
        }, 750);
    }

  return (
    <output
        aria-labelledby="notification-label"
        id={type === 'success' ? styles.success_notif : type === 'error' ? styles.error_notif : null}
        className={styles.notification}
        ref={notification}
        onMouseLeave={closeAterMouseLeave}
    >   
        <p>{title}</p>
        <span id="notification-label">
            {label}
        </span>
        <button type="button" 
        onClick={onClose}
         aria-label="Close notification" className={`${styles.modal_close} ${styles.no_button}`}>
            <MdClose/>
        </button>
    </output>
  )
}

Notification.defaultProps = {
    timer: TOAST_TIME_MS,
    type: 'success'
};

export default Notification