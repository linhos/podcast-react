import {getFavourites} from './getFavourites';


describe('test suite get favourites service', () => {

    it('should resolve the promise correctly', async() => {
        const data = await getFavourites();
        expect(data[0].id).toBe(1);
    })

    it('should return data from api', async() => {
        
        const expectedResult = ['1', '2', '3'];
        const service = {
            getFavourites: jest.fn().mockReturnValue(expectedResult)
        }

        const result = await service.getFavourites();
        expect(result).toBe(expectedResult);
    });

    it('should return a error if fails ', async () => {
        const service = {
            getFavourites: jest.fn().mockRejectedValue(new Error('Error'))
        }
        const result = await service.getFavourites();
        console.log(result);
        
    })

})