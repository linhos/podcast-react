const repository = {
    find: async function() {
        return [{id:1, name: 'favourite1'}, {id:2, name: 'favourite2'}];
    },
    create: function() {
        return 'create'
    }
}

export default repository;