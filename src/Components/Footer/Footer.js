import React from 'react';
import {Link} from 'react-router-dom'
import 
{FooterArea, 
 FormLabel,
 FormButton,
 FormField,
 Quick,
 Connect,
 Form,
 Title,
 PageLink,
 Text,
 Icon } from './FooterElements';

function Footer() {
  return (
    <FooterArea>
        <Form>
            <Title>JOIN OUR FAMILY!</Title>
            <FormLabel>Sign up for exclusive offers, promos and product launches! We promise we won't send you lots of emails, only the good stuff.</FormLabel>
            <FormField type="email" placeholder="Enter your email address" required/>
            <FormButton>SUBSCRIBE</FormButton>
        </Form>
        <Quick>
            <Title>Quick Links</Title>
            <Link to="/contact-us">
              <PageLink>Contact Us</PageLink>
            </Link>
            <Link to="/fonts-product-size-guide">
              <PageLink>Fonts/Product/Size Guide</PageLink>
            </Link>
            <Link to="/faqs">
              <PageLink>FAQs</PageLink>
            </Link>
            <Link to="/size-guide">
              <PageLink>Size Guide</PageLink>
            </Link>
            <Link to="/shipping-returns">
              <PageLink>Shipping/Returns</PageLink>
            </Link>
        </Quick>
        <Connect>
            <Title>Stay Connected</Title>
            <Text>Join our family and stay connected with us!</Text>
            <Icon/>
        </Connect>
    </FooterArea>
  )
}

export default Footer