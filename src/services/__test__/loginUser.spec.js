import loginUser from '../loginUser';


describe('test suite for loginUser service function', () => {
    it('should return a user object', () => {
        const FAKE_USER = {name: 1, email: 'l@gmail.com'};

        const mockLoginUser = jest.fn().mockReturnValue(FAKE_USER);

        const result = mockLoginUser();

        expect(result).toBe(FAKE_USER)
    });
})