interface Favourite {
  completed: boolean
  id: number
  title: string
}

const repository = {
  find: async function (){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  },
  create: function () {
    return "create";
  },
};

export default repository;
