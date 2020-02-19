const Intern = require('../lib/intern');

test('', () => {
    // set up
    const joe = new Intern('joe', 1, 'joe@gmail.com', 2)


    // assert
    expect(joe.internName).toEqual('joe');
})