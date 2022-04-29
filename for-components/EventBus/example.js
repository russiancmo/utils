function test(name, lastName) {
    console.log(`Имя ${name}, Фамилия: ${lastName}`);
}

mySubscription.on('getFullName', test);

mySubscription.emit('getFullName', 'Игорь', 'Лобода');