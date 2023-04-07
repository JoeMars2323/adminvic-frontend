import { DefaultAbstract } from "./default-abstract";

export class Season extends DefaultAbstract {
    id!: number;
    tvserieId!: number;
    seasonName!: string;
    seasonNumber!: number;
    seasonYear!: number;
}
