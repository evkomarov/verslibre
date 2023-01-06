let objects = [
    {
    name: 'Ivan',
    familyName: 'Ivanov',
    patronymic: 'Ivanovich',
    dateOfBirth: {day: 01, month: 1, year: 1990},
    education: 'Upper school',
    occupation: 'general worker',
    married: true,
    phoneNumber: '79123456789',
    email: 'ivan@ivanov.com',
    },
    {
    name: 'Nikolay',
    familyName: 'Nikolaev',
    patronymic: 'Nikolaevich',
    dateOfBirth: {day: 31, month: 5, year: 1975},
    education: 'First graduate',
    occupation: 'Self-employed',
    married: true,
    phoneNumber: '79991234567',
    email: 'nick@nikolaev.com',
    },
    {
    name: 'Oleg',
    familyName: 'Olegov',
    patronymic: 'Olegovich',
    dateOfBirth: {day: 17, month: 7, year: 1960},
    education: 'Ph.d',
    occupation: 'Surgeon',
    married: true,
    phoneNumber: '79876543210',
    email: 'oleg-the-best@hospital.com',
    },
];

function filter(objects, key, value) {
    const result = [];

    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];

        if(obj[key] === value) result.push(obj);
    }
    return result;
}

filter(objects, 'patronymic', 'Olegovich');
console.log(filter(objects, 'patronymic', 'Olegovich'));
