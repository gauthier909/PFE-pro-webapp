import { Choix } from './choix'

export class Jeu {
    _id: string
    date: string
    demande: string
    idEnfant: string
    idProfessionnel: string
    filtres: string[]
    choix: Choix
}