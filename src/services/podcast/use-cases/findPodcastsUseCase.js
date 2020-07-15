
function findPodcastsUseCase(repository) {

    const result = {
        podcasts : [],
        errors: []
    }    

    return async function() {
        try {
            result.podcasts = repository.find();
        } catch (error) {
            result.errors = [...result.errors, error.toString()];
        }
        return result;
    }
}

export default findPodcastsUseCase