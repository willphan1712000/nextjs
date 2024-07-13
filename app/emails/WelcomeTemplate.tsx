import React, { CSSProperties } from 'react';
import { Html, Body, Container, Text, Link, Preview, Tailwind, Img } from '@react-email/components';
import bg from '../app/assets/img/bg.jpg';

const WelcomeTemplate = ({ name }:{name:string}) => {
  return (
    <Html>
        <Preview>Welcome!</Preview>
        <Tailwind>
            <Body className='bg-white'>
                <Container>
                    <Text className='font-bold text-3xl'>Hello {name}</Text>
                    <Link href="https://youtube.com">Will</Link>
                    <Img src="" alt="" width="300" height="300" />
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
    backgroundColor: '#fff',
}

export default WelcomeTemplate
