import { useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import SidebarButton from "./components/SidebarButton";

export default function Sidebar() {
	return (
		<Flex
			display={{ base: "none", md: "flex" }}
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
