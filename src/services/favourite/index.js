import createRepository from './repository';
import findFavouritesUseCase from './use-cases/findFavouritesUseCase';


function createFavouriteService () {
    const repository = createRepository();

    return {
        find: findFavouritesUseCase(repository)
    }
}

export default createFavouriteService;