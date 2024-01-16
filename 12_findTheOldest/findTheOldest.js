const findTheOldest = function (listPersons) {
    let oldestAge = 0;
    let age = 0;
    let oldestPerson = {};

    listPersons.forEach(person => {
        age = person.yearOfDeath - person.yearOfBirth;

        if (typeof person.yearOfDeath === "undefined") {
            age = new Date().getFullYear() - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }

    });

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
