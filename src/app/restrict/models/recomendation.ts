import { DefaultAbstract } from "./default-abstract";

export class Recomendation extends DefaultAbstract {
    id!: number;
    visualizationId!: number;
    categoryId!: number;
    recomendationId!: number;
    percentageMatch!: number;
    filmIdsList!: number[];
}
