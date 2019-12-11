import { Choix } from './choix'
import { Filtre } from './filtre'

export class Jeu {
    _id: string
    date: string
    demande: string
    idEnfant: string
    idProfessionnel: string
    filtresPartie: Filtre[]
    choix: Choix[]
}