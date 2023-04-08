import { Award } from "./award";
import { DefaultAbstract } from "./default-abstract";
import { Film } from "./film";
import { Tvserie } from "./tvserie";

export class Actor {

    //backend variables
	id!: number;
	actorName!: string;
	actorBirthName!: string;
	actorNickname!: string;
	actorCountry!: string;
	actorCity!: string;
	actorBirthDate!: string;
	actorHeight!: string;
    actorBiography!: string;
	filmIdsList!: number[];
	tvserieIdsList!: number[];
	awardIdsList!: number[];
	films!: Film[];
	tvseries!: Tvserie[];
	awards!: Award[]

}
