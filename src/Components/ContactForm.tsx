import {useRef, useEffect, useState} from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { animateContactForm } from '../Helpers/GsapHelpers';

import CircLoader from '../assets/circloader.svg'
import Notification from './Notification';

import styles from '../Css/Contact.module.css'

// validate values and create errors if there are any
const validate = (values: {name:string|null, email:string|null, message:string|null}) => {
    
    type Errors = {
        name: string;
        email: string;
        message: string;
    }

    const errors = {} as Errors;
  
    if (!values.name) {
      errors.name = 'Required!';
    } else if (values.name.length < 5) {
      errors.name = 'Must be 5 characters or more';
    }else if (values.name.length > 30){
      errors.name = 'Too long';
    }
  
    if (!values.email) {
      errors.email = 'Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!values.message) {
     errors.message = 'Required!';
     } else if (values.message.length < 20) {
         errors.message = 'Must be 20 characters or more';
     }
     
    return errors;
};

const ContactForm = () => {
    // Ref for email JS  
    const form = useRef<HTMLFormElement>(null);
    // Refs for gsap animations
    let inputTextRef = useRef<HTMLInputElement>(null);
    let inputEmailRef = useRef<HTMLInputElement>(null);
    let inputTextareaRef = useRef<HTMLTextAreaElement>(null);
    let buttonRef = useRef<HTMLButtonElement>(null);

    //component state for notifications
    const [message, setmessage] = useState(null)
    const [type, settype] = useState(null)
    const [issubmitting, setissubmitting] = useState(false)

    // Animate on mount
    useEffect(() => {
        animateContactForm(inputTextRef.current, inputEmailRef.current, inputTextareaRef.current, buttonRef.current)
    }, [])

    // initialize Formik
    const formik = useFormik({
        // initial values of form
        initialValues: {
            name: '',
            email: '',
            message: ''
          },
          // validate values
          validate,
          // on Submit
          onSubmit: (values) => {
            setissubmitting(true)
            try {
              emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY)
              .then((res) => {
                    settype('success')
                    setmessage('Email succesfully sent :) I`ll reply as soon as possible.')
                    formik.resetForm()
                    setissubmitting(false)
              })
            } catch (error) {
                  settype('error')
                  setmessage('Something went wrong please try again or send me an email at dodkymull@gmail.com')
                  setissubmitting(false)
            }
          }
    })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm} ref={form}>
      {message && (<Notification type={type} title='Success' label={message} setmessage={setmessage}/>)}
        <div id='quitFadeRight' className={styles.inputWrap} >
            <input
                id='name'
                name='name'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder='NAME'
                ref={inputTextRef}
            />
            <span className={styles.line} ></span>
            {formik.touched.name && formik.errors.name ? (
                <span className={styles.contactformerrormsg}>{formik.errors.name}</span>
            ) : formik.touched.name ? <span className={styles.check}>&#10003;</span> : null}
        </div>
        <div id='quitFadeRight'className={styles.inputWrap}>
            <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder='EMAIL'
                ref={inputEmailRef}
            />
             <span className={styles.line} ></span>
            {formik.touched.email && formik.errors.email ? (
                <span className={styles.contactformerrormsg}>{formik.errors.email}</span>
            ) : formik.touched.email ? <span className={styles.check}>&#10003;</span> : null}
       </div>       
        <div id='quitFadeRight' className={styles.inputWrap}>
            <textarea
                id='message'
                name='message'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder='MESSAGE'
                ref={inputTextareaRef}
            />
            <span className={styles.line}></span>
            {formik.touched.message && formik.errors.message ? (
                <span className={styles.contactformerrormsg}>{formik.errors.message}</span>
            ) : formik.touched.message ? <span className={styles.check}>&#10003;</span> : null}
        </div>
        {/* if every value of errors object is null disable is false else is true  */}
        <button id='quitFadeRight' ref={buttonRef} type='submit' disabled={Object.values(formik.errors).every(x => x === null) ? false : true}>
          SEND
          {issubmitting && <img src={CircLoader} alt="circ-loader" />}
        </button>
     </form>
  )
}

export default ContactForm