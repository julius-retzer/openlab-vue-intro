var app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: ["Bananas", "Apples", "Avocados", "Oats", "Kiwi"]
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    }
  }
});
