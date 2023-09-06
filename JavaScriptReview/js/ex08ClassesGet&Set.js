class Hotel {
    #_name;
    #_rooms;
    #_booked;

    constructor(name, rooms, booked) {
        this.#_name = name;
        this.#_rooms = rooms;
        this.#_booked = booked;
    }

    get rooms() {
        return this.#_rooms;
    }

    set rooms(val) {
        this.#_rooms = val * 2;
    }

    get name() {
        return (this.#_name).toUpperCase();
    }

    set name(val) {
        this.#_name = val;
    }

    get booked() {
        return this.#_booked;
    }

    set booked(val) {
        this.#_booked = val;
    }
}

const hotel1 = new Hotel('Westin', 95, 77);

console.table(hotel1);
console.log(hotel1.name);
hotel1.rooms = 200;
console.table(hotel1);
console.log(hotel1._name);
