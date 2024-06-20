import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
  label,
  input,
  textarea,
  button,
} from './contact.module.css'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <p>Cntact Form</p>
      <form method="post" action="https://formcarry.com/s/{YOUR UNIQUE ENDPOINT}">
	
	<label htmlFor="name" className={label}>
	  Name
	</label>
	<input className={input} type="text" name="name" id="name" required={true} />
	
	<label htmlFor="email" className={label}>
	  Email
	</label>
	<input className={input} type="email" name="email" id="email" required={true} />
	
	<label htmlFor="message" className={label}>
	  Message
	</label>
	<textarea className={textarea} name="message" id="message" rows="5" required={true} />
	
	<button className={button} type="submit">Send</button>
	
      </form>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage

