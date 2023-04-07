import { DefaultAbstract } from "./default-abstract";

export class Chapter extends DefaultAbstract {
    id!: number;
	seasonId!: number;
    chapterName!: string;
    chapterNumber!: string;
    chapterResume!: string;
    chaptaerDuration!: number;
    chapterDate!: string;
    actorList!: number[];
}
