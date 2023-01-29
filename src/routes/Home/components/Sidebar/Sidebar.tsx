import { useLocation } from "react-router-dom";
import { Flex, Box, Text, Center } from "@chakra-ui/react";
import SidebarButton from "./components/SidebarButton";

export default function Sidebar() {
	const location = useLocation();
	console.log("current location: ", location);
	return (
		<Flex
			h="full"
			w="10rem"
			justifyContent="flex-start"
			py="1rem"
			flexDirection="column"
			gap="0.5rem"
		>
			<SidebarButton link="/" text="Home" />
			<SidebarButton link="/library" text="Library" />
		</Flex>
	);
}
