import findFavouritesUseCase from './findFavouritesUseCase';

describe('test suite for find favourites use case', () => {
    const expectedResult = [{"id": 1, "name": "mock"}];
    const expectedError = ['error33'];

    beforeEach(() => {
        jest.clearAllMocks();
    });


    it('should return a array of favourites', async () => {

        const mockResolveRepository = {
            find: jest.fn().mockResolvedValue(expectedResult)
        }
    
        const findUseCase = findFavouritesUseCase(mockResolveRepository);
        const result = await findUseCase();

        expect(result.favourites).toEqual(expectedResult);
    });

    it('should fill the errors array use case fails', async () => {

        const mockRejectRepository = {
            find: jest.fn().mockRejectedValue(expectedError)
        }
        const findUseCase = findFavouritesUseCase(mockRejectRepository);
        const result = await findUseCase();

        expect(result.errors).toEqual(expectedError);
    })
})