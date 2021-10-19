import React from 'react'
import './Home.css'
import banner from '../Assets/testbaner.png'
import Card from '../../Components/Card/Card'
import groupIronman from "../Assets/articleGroupIronman.png"


export default function Home() {
    


    return (
        <>

            <img src={banner} alt="banner-osrs" className="banner" />

            <div className="description">
                <h2 className="des-title">Bienvenue sur OSRune</h2>
                <p className="des-body">
                Revivez le système de mise à niveau difficile et le PvP à risque du plus grand MMO de style rétro. Jouez avec des millions d'autres joueurs dans cet héritage du jeu en ligne où la communauté contrôle le développement afin que le jeu soit vraiment ce que vous voulez qu'il soit !</p>
            </div>

            <h2 className="home-title">Nouveauté & Mises à jours</h2>

            <div className="container-cards">
                
                <Card>
                    <img src={groupIronman} alt="GroupIronman" />
                    <h2>Groupe Ironman</h2>
                    <h3>19 Octobre 2021 - Mise à jours jeu</h3>
                    <p>Le mode permet à 2 à 5 joueurs de se regrouper avec toutes les restrictions normales du mode Ironman (ou du mode Hardcore Ironman). Seuls les comptes nouvellement créés peuvent activer le mode Group Ironman. Les comptes existants, y compris ceux qui sont déjà des comptes Ironman, ne peuvent pas rejoindre un groupe.
                    Les joueurs qui rejoignent un groupe avant sa création ont le statut Prestige, ce qui leur permet de s'affranchir des restrictions commerciales.</p>
                    
                </Card>
                <Card>
                    <img src={groupIronman} alt="GroupIronman" />
                    <h2>Groupe Ironman</h2>
                    <h3>19 Octobre 2021 - Mise à jours jeu</h3>
                    <p>Le mode permet à 2 à 5 joueurs de se regrouper avec toutes les restrictions normales du mode Ironman (ou du mode Hardcore Ironman). Seuls les comptes nouvellement créés peuvent activer le mode Group Ironman. Les comptes existants, y compris ceux qui sont déjà des comptes Ironman, ne peuvent pas rejoindre un groupe.
                    Les joueurs qui rejoignent un groupe avant sa création ont le statut Prestige, ce qui leur permet de s'affranchir des restrictions commerciales.</p>
                    
                </Card>
                <Card>
                    <img src={groupIronman} alt="GroupIronman" />
                    <h2>Groupe Ironman</h2>
                    <h3>19 Octobre 2021 - Mise à jours jeu</h3>
                    <p>Le mode permet à 2 à 5 joueurs de se regrouper avec toutes les restrictions normales du mode Ironman (ou du mode Hardcore Ironman). Seuls les comptes nouvellement créés peuvent activer le mode Group Ironman. Les comptes existants, y compris ceux qui sont déjà des comptes Ironman, ne peuvent pas rejoindre un groupe.
                    Les joueurs qui rejoignent un groupe avant sa création ont le statut Prestige, ce qui leur permet de s'affranchir des restrictions commerciales.</p>
                    
                </Card>
            </div>
        </>
    )
}
