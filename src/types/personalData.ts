import { Tech } from "./tech"

export type PersonalData = {
    phone: string,
    mail: string,
    profiles: {
        link: string
        name: string
        icon: string
}[],
techs: Tech[]
}