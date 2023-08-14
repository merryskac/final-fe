'use client'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'
import Footer from '../components/footer'

export default function NotFound() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
        justify='center'
        height='700px'
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Text color={'gray.500'} >
            
            <Text as={'b'} color={'green.400'} fontSize='xl'>Your page is Not Found</Text>
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              <a href="/content">
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              >
              Go Back
            </Button>
            </a>
            
          </Stack>
        </Stack>
      </Container>
      <Footer/>
    </>
  )
}

