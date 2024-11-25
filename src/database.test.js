const db = require('./database');
beforeAll(async () => {
    await db.sequelize.sync();
});
test('create person', async () => {
    expect.assertions(1);
    const person = await db.Person.create({
        id: 3,
        firstName: 'Sammy',
        lastName: 'Davis Jr.',
        email: 'sammy@example.com'
    });
    expect(person.id).toEqual(3);
});
test('get person', async () => {
    expect.assertions(2);
    const person = await db.Person.findByPk(3);
    expect(person.firstName).toEqual('Sammy');
    expect(person.lastName).toEqual('Davis Jr.');
});
test('delete person', async () => {
    expect.assertions(1);
    await db.Person.destroy({
        where: {
            id: 3
        }
    });
    const person = await db.Person.findByPk(2);
    expect(person).toBeNull();
});
afterAll(async () => {
    await db.sequelize.close();
});
