// components/blog-item.js
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading, Flex, Badge, useColorModeValue, HStack, Icon } from '@chakra-ui/react'
import { IoHeartOutline, IoChatbubbleOutline } from 'react-icons/io5'

export const BlogItem = ({ children, href, title, thumbnail, date, category, excerpt, likes, comments }) => {
    const bgBox = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
    const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
    const badgeBg = useColorModeValue('orange.100', 'orange.800')
    const badgeColor = useColorModeValue('orange.800', 'orange.100')

    return (
        <LinkBox
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor={borderColor}
            transition="all 0.3s"
            _hover={{
                transform: 'translateY(-5px)',
                shadow: 'md',
                borderColor: 'orange.300'
            }}
        >
            <Box position="relative" h="200px" w="100%">
                <Image
                    src={thumbnail}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    priority
                    unoptimized
                />
                <Badge
                    position="absolute"
                    top="4"
                    left="4"
                    bg={badgeBg}
                    color={badgeColor}
                    fontSize="sm"
                    fontWeight="medium"
                    px={3}
                    py={1}
                    borderRadius="full"
                >
                    {category}
                </Badge>
            </Box>

            <Box p={5}>
                <Text fontSize="sm" color="gray.500" mb={2}>
                    {date}
                </Text>

                <Heading as="h3" size="md" mb={3} lineHeight="tall">
                    <NextLink href={href} passHref>
                        <LinkOverlay>{title}</LinkOverlay>
                    </NextLink>
                </Heading>

                <Text fontSize="md" mb={4} noOfLines={2} color="gray.600">
                    {excerpt}
                </Text>

                <HStack spacing={4}>
                    {likes && (
                        <Flex align="center">
                            <Icon as={IoHeartOutline} mr={1} color="gray.500" />
                            <Text fontSize="sm" color="gray.500">{likes}</Text>
                        </Flex>
                    )}
                    {comments && (
                        <Flex align="center">
                            <Icon as={IoChatbubbleOutline} mr={1} color="gray.500" />
                            <Text fontSize="sm" color="gray.500">{comments}</Text>
                        </Flex>
                    )}
                </HStack>
            </Box>
        </LinkBox>
    )
}