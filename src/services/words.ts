import { kanjis } from "@/mocks/kanji.json";
import { Kanji } from "@/types";

function getKanjis(): Kanji[] {
	return kanjis as Kanji[];
}

export default {
	getKanjis,
};
