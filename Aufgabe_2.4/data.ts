namespace Aufgabe1_und_2 {

    export let koerperteile: object = {
        Kopf: [
            "/Bilder/Blume1.jpg",
            "/Bilder/Blume2.jpg",
            "/Bilder/Blume3.jpg"
        ],
        Koerper: [
            "Bilder/Koerper1.jpg",
            "Bilder/Koerper2.jpg",
            "Bilder/Koerper3.jpg"
        ],
        Fuesse: [
            "Bilder/Fuesse1.jpg",
            "Bilder/Fuesse2.jpg",
            "Bilder/Fuesse3.jpg"
        ]
    };

    export const data: string = JSON.stringify(koerperteile);
}