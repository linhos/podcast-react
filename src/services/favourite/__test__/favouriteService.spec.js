import createFavouriteService from '../index';
import createRepository from '../repository';
import findFavouritesUseCase from '../use-cases/findFavouritesUseCase';


jest.mock('../repository');
jest.mock('../use-cases/findFavouritesUseCase');

describe('test suite for favourite service entry point', () => {

    const mockRepository = {
        find: 'Mock Repository'
    }

    beforeEach(() => {
        createRepository.mockReturnValue(mockRepository);
        createFavouriteService();
    })
    it('should call createRepository once', ()=> {
        expect(createRepository).toHaveBeenCalledTimes(1)
    });
    it('should call findUseCase with the repository injected', () => {
        expect(findFavouritesUseCase).toHaveBeenLastCalledWith(mockRepository);
    })
})