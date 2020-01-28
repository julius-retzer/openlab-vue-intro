var app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [
      { name: "Bananas", done: false },
      { name: "Apples", done: false },
      { name: "Avocados", done: false }
    ]
  },
  methods: {
    addTodo() {
      this.todos.push({ name: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(todoToRemove) {
      this.todos = this.todos.filter(todo => todo.name !== todoToRemove.name);
    },
    markAsDone(todoToMarkAsDone) {
      this.todos = this.todos.map(function(todo) {
        if (todo.name === todoToMarkAsDone.name) {
          todo.done = !todo.done;
          return todo;
        }
        return todo;
      });
    }
  }
});
