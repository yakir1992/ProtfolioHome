import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yakir's homepage" />
        <meta name="author" content="Yakir Ben Harush" />
        <meta name="author" content="yakir1992" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Yakir Ben Harush" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yakir1992" />
        <meta name="twitter:creator" content="@yakir1992" />
        <meta property="og:site_name" content="Yakir Ben Harush" />
        <meta name="og:title" content="Yakir Ben Harush" />
        <meta property="og:type" content="website" />
        <title>Yakir Ben Harush</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
