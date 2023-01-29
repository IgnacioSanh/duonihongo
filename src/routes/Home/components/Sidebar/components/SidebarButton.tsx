import { Link } from "react-router-dom";
import { Center, Text } from "@chakra-ui/react";

interface SidebarButtonProps {
	link: string;
	text: string;
}

export default function SidebarButton({ link, text }: SidebarButtonProps) {
	return (
		<Link to={link}>
			<Center
				w="full"
				h="3rem"
				borderRadius="0.5rem"
				cursor="pointer"
				border="1px solid #80a1d4"
				_hover={{ textColor: 'white', bgColor: "#80a1d4", transitionDuration: "400ms" }}
			>
				<Text fontSize="xl">{text}</Text>
			</Center>
		</Link>
	);
}
