import { useEffect, useState } from "react";
import {
	Text,
	Box,
	Flex,
	IconButton,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { Kanji } from "@/types";
import { WordService } from "@/services";

import { KanjiListItem } from "./components";
const Library = () => {
	const [kanjiList, setKanjiList] = useState<Kanji[]>([]);

	useEffect(() => {
		setKanjiList(WordService.getKanjis());
	}, []);

	return (
		<Tabs>
			<TabList>
				<Tab>Kanji</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
				<Box>
			<Flex justifyContent="space-between" alignItems="center" mb="1rem">
				<Text fontSize="xl">
					You have {kanjiList.length}{" "}
					{`Kanji${kanjiList.length === 1 ? "" : "s"}`}
				</Text>
				<IconButton
					colorScheme="blue"
					aria-label="Add word"
					icon={<AddIcon />}
				/>
			</Flex>
			{kanjiList.map((kanji) => (
				<KanjiListItem kanji={kanji} />
			))}
		</Box>			
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default Library;
