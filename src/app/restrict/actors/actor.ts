import { Award } from "../models/award";
import { DefaultAbstract } from "../models/default-abstract";
import { Film } from "../models/film";
import { Tvserie } from "../models/tvserie";

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
