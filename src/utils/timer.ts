export default function getTimeAgo(timestamp: number): string {
    const timeAgo = Date.now() - (timestamp * 1000)
    const seconds = Math.floor(timeAgo / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (seconds < 60) {
        return "Il y a moins d'une minute";
    }
    if (minutes < 60) {
        return `Il y a ${minutes} minute`;
    }
    if (hours < 24) {
        return `Il y a ${hours} heure`;
    }
    if (days < 30) {
        return `Il y a ${days} jour`;
    }
    if (months < 12) {
        return `Il y a ${months} mois`;
    }
    return `Il y a ${years} ans`;
};
export function getDuration(duration: number): string {
    const seconds = Math.floor(duration % 60);
    const minutes = Math.floor((duration / 60) % 60);
    const hours = Math.floor((duration / 3600) % 24);
    if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    }
    if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
};