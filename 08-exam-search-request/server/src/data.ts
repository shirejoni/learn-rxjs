// src/data.ts
export interface City {
    id: number;
    name: string;
    description: string;
}

export const cities: City[] = [
    { id: 1, name: "Tehran", description: "The capital city of Iran." },
    { id: 2, name: "Mashhad", description: "A holy city in Iran." },
    { id: 3, name: "Isfahan", description: "Known for its Persian architecture." },
    { id: 4, name: "Shiraz", description: "Famous for its gardens and poets." },
    { id: 5, name: "Tabriz", description: "A historical city in northwest Iran." },
    { id: 6, name: "Qom", description: "A major religious center." },
    { id: 7, name: "Kerman", description: "Known for its desert landscapes." },
    { id: 8, name: "Yazd", description: "Famous for its ancient buildings and wind towers." },
    { id: 9, name: "Rasht", description: "A city near the Caspian Sea." },
    { id: 10, name: "Kermanshah", description: "A city with a rich history." },
];