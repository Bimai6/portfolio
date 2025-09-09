export class Repo {
    constructor(
        public name: string,
        public html_url: string,
        public description: string | null,
        public language: string | null,
        public created_at: string,
        public visibility: string,
    ) {}

    get formattedDate(): string {
        const dateArray = this.created_at.split('T')[0].split('-');
        return dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0].substring(2,4);
    }

    get formattedTitle(): string {
        return this.name.length < 20 ? this.name.split("-").map(word => word.toUpperCase()).join(" ").trim() : this.name.split("-")[0].toUpperCase().trim();
    }
}