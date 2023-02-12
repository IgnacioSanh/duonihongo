import { Flex, Text, Avatar, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
	return (
		<Flex
			w="full"
			h="60px"
			alignItems="center"
			justifyContent="space-between"
			px="2rem"
			borderBottom="2px solid gray"
		>
			<Flex alignItems="center" gap="1rem">
				<IconButton
					display={{ base: "flex", md: "none" }}
					icon={<HamburgerIcon />}
					aria-label="Menu button"
				/>
				<Text fontSize="md">DuoNihongo</Text>
			</Flex>
			<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
		</Flex>
	);
}
