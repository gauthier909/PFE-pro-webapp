export class Jeu {
    _id: string
    date: string
    demande: string
    idEnfant: string
    idProfessionnel: string
    filtres: string[]
    choix: [{ commentaire: string, nom: string, nomImage: string, valeur: number }]
}