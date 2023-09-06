class Hotel {
    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
    }

    checkAvailability() {
        return this.rooms - this.booked;
    }
}

const hotel1 = new Hotel('Westin', 250, 120);
const hotel2 = new Hotel('Empress', 230, 228);
console.log(hotel1);
console.log(hotel2);
console.log(hotel1.rooms);
console.log(hotel2.checkAvailability());
