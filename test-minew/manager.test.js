const Manager = require('../lib/manager');

describe('Manager', () => {
    it("should return the new manager name", () => {

        // set up
        const manager = new Manager('joe', 1, 'jo@j.com', 2)


        // assert
        expect(manager.managerName).toEqual('joe');
    })
})