import repository from '../repository';

describe('test suite for favourites repository', () => {

    it('should have a find method', () => {
        expect(repository).toHaveProperty('find');
    });

    it('should have a create method', () => {
        expect(repository).toHaveProperty('create');
    });
})