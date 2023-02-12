import { Text, Flex } from "@chakra-ui/react";
import { Kanji } from "@/types";

interface KanjiListItem {
	kanji: Kanji;
}

export default function KanjiListItem({ kanji }: KanjiListItem) {
	const { kanjiSymbol, meanings } = kanji;
	const concatMeaning = meanings.map(({ meaning }) => meaning).join(", ");
	return (
		<Flex
			bgColor="gray.100"
			p="1rem"
			borderRadius="1rem"
			boxShadow="base"
			flexDirection="row"
			alignItems="center"
			gap="1rem"
		>
			<Text fontSize="2xl">
				{kanjiSymbol}({meanings.length})
			</Text>
			<Text>{concatMeaning}</Text>
		</Flex>
	);
}
