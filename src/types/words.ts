export enum ReadingType {
	KUN = "くん",
	ON = "おん",
}

export interface KanjiMeaning {
	reading: string;
	example: string;
	meaning: string;
	readingType?: ReadingType;
}

export interface Kanji {
	kanjiSymbol: string;
	meanings: KanjiMeaning[];
}
