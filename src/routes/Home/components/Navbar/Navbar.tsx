import { Flex, Text, Avatar } from "@chakra-ui/react";

export default function Navbar() {
	return (
		<Flex
			w="full"
			h="60px"
			alignItems="center"
			justifyContent="space-between"
			px="3rem"
			borderBottom="2px solid gray"
		>
			<Text fontSize="md">DuoNihongo</Text>
			<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
		</Flex>
	);
}
