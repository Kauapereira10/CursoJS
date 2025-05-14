exports.index = (req, res) => {
    const users = [
        { name: 'Lucas', age: 22 },
        { name: 'Ana', age: 25 },
        { name: 'Carlos', age: 30 }
    ];

    res.render('index', { users });
};