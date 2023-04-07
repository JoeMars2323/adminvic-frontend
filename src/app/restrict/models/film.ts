import { DefaultAbstract } from "./default-abstract";

export class Film extends DefaultAbstract {
    id!: number;
    recomendedAgeId!: number;
    filmName!: string;
    filmDescription!: string;
    filmYear!: number;
    categoryList!: number[];
	actorList!: number[];
	awardsList!: number[];
}
