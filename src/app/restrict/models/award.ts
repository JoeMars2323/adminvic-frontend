import { DefaultAbstract } from "./default-abstract";

export class Award extends DefaultAbstract {
    id!: number;
    awardName!: string;
    awardDescription!: string;
    awardYear!: number;
    filmIdsList!: number[];
	tvserieIdsList!: number[];
	actorIdsList!: number[];
}
