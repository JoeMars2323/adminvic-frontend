import { DefaultAbstract } from "./default-abstract";

export class Tvserie extends DefaultAbstract {
    id!: number;
    recomendedAgeId!: number;
    vserieName!: string;
    tvserieDescription!: string;
    categoryList!: number[];
	actorStarringList!: number[];
	awardsList!: number[];
}
