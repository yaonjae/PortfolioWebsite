import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
    message: string;
    email: string;
}

export default function ContactFormEmail({ message, email }: ContactFormEmailProps) {
  return (
    <Html>
        <Preview>{message}</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>A new message from the Portfolio Contact Form</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>Sender: {email}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
