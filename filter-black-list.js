function filter(sourceList, blackList) {
    let filteredList = [];

    for (let i of sourceList) {
        if (blackList.includes(i) === false) {
            console.log(i, 'такого адреса нет в чёрном списке')
            filteredList.push(i);
        } else console.log(i, 'адрес находится в чёрном списке');
    }
    return filteredList;
}

let sourceList = ['a@a.com', 'b@a.com', 'c@a.com', 'd@a.com', 'e@a.com', 'f@a.com', 'g@a.com', 'h@a.com'];
let blackList = ['a@a.com', 'f@a.com', 'g@a.com', 'h@a.com'];
console.log('Отфильтрованный список адресов:', filter(sourceList, blackList));