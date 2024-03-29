import { Box, Center, Flex, Heading, Link, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { NavBarContext } from '../../contexts/NavBarContext';
import { MdCheckCircle } from 'react-icons/md';

const Services: React.FC = () => {
    const [_context, setContext] = useContext(NavBarContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setContext('light'), []);

    return (
        <>
            <Flex flexDir="column">
                <Flex height="100vh" alignItems="center" position="relative">
                    <Section position="absolute" height="100%">
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                top={54}
                                bgColor="#3E1905"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colStart={3} colSpan={3}>
                            <Box
                                top={-15}
                                bgColor="#1C1E29"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colStart={5} colSpan={1}>
                            <Box
                                top={-35}
                                bgColor="#3B3653"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                bgColor="brand.50"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)">
                                <video src="/video/casette.mp4" autoPlay muted loop width="100%" />
                            </Box>
                        </SectionItem>
                    </Section>

                    <Section>
                        <SectionItem colStart={2} colSpan={4}>
                            <Center flexDirection="column" gap={4}>
                                <Heading color="#F7A75A" size="sm" opacity={0.5} fontWeight={300}>
                                    Sandheden er at telefonopkald ofte er mere meningsfyldte end tekstbeskeder.
                                </Heading>

                                <Link href="tel:+4542661028">
                                    <Heading
                                        size="4xl"
                                        background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                        backgroundClip="text"
                                        textColor="transparent">
                                        +45 42 66 10 28
                                    </Heading>
                                </Link>
                            </Center>
                        </SectionItem>
                    </Section>
                </Flex>
                <Section py={24}>
                    <SectionItem colStart={2} colSpan={2} py={4}>
                        <Heading fontWeight="semibold">Tal med en ekspert</Heading>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={2} py={4}>
                        <Text>Vi hjælper med:</Text>
                        <List px={4}>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Vurdering og estimering af jeres næste IT-projekt
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Vurdering og estimering af jeres næste IT-projekt.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Professionel og gratis rådgivning til jeres udviklingsbehov og hvordan vi kan hjælpe jer.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                Drift & support af nuværende it-systemer.
                            </ListItem>
                        </List>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <ContactForm></ContactForm>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Services;
