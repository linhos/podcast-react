
const podcastRepository = {
    find: async function() {
        return [{id:1, name: 'podcast1'}, {id:2, name: 'podcast2'}];
    }
}

export default podcastRepository;