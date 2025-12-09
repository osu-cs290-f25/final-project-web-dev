export interface BattleData {
    player: PlayerData;
    opponent: PlayerData;
    battleTime: string;
}

export interface PlayerData {
    tag: string;
    name: string;
    startingTrophies: number;
    crowns: number;
    kingTowerHitPoints: number;
    princessTowersHitPoints: number[] | null;
    clan: ClanInfo;
    cards: CardInfo[];
    supportCards: SupportCardInfo[];
    globalRank: number | null;
    elixirLeaked: number;
}

export interface WinBarData {
    playerWins: number;
    opponentWins: number;
}

interface ClanInfo {
    tag: string;
    name: string;
    badgeId: number;
}

interface BaseCard {
    name: string;
    id: number;
    level: number;
    maxLevel: number;
    rarity: string;
    elixirCost: number;
    iconUrls: {
        medium: string;
        evolutionMedium?: string;
    };
    starLevel?: number;
    evolutionLevel?: number;
    maxEvolutionLevel?: number;
}

type CardInfo = BaseCard;

interface SupportCardInfo {
    name: string;
    id: number;
    level: number;
    maxLevel: number;
    rarity: string;
    iconUrls: {
        medium: string;
    };
}
