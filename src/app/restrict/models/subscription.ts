import { DefaultAbstract } from "./default-abstract";

export class Subscription extends DefaultAbstract {
    id!: number;
    profileId!: number;
    subscriptionDate!: string;
}
