import React from 'react';
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
            <FormField placeholder="Enter your email address"/>
            <FormButton>SUBSCRIBE</FormButton>
        </Form>
        <Quick>
            <Title>Quick Links</Title>
            <PageLink>Contact Us</PageLink>
            <PageLink>Fonts/Product/Size Guide</PageLink>
            <PageLink>FAQs</PageLink>
            <PageLink>Size Guide</PageLink>
            <PageLink>Shipping/Returns</PageLink>
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