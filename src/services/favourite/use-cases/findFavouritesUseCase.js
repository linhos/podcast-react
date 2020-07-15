
const findFavouritesUseCase = (repository) => {
    const result = {
        favourites: [],
        errors: []
    };

    return async function () {
        try {
            result.favourites = await repository.find();
        } catch (error) {
            result.errors = [...result.errors, error.toString()];
        }   
        return result;
    }
}

export default findFavouritesUseCase;