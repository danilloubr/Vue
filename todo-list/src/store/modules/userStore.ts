import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
// import { TodoList } from "@/interfaces/User.dto";
import store from "../../store";

@Module({ dynamic: true, store, name: "userStore" })
class UserStore extends VuexModule {
  public todos: any[] = [];

  @Mutation
  private ADD_TODO(todo: any) {
    this.todos.push(todo);
    console.log("TODOS STORE", this.todos);
  }
  @Mutation
  private REMOVE_TODO(todo: any) {
    this.todos = this.todos.filter((item) => item !== todo);

    console.log("THIS TODO - remove do store", this.todos);
    console.log("TODO MUTATION REMOVE", todo);
  }

  @Action
  addTodo(todo: any) {
    console.log("TODO NA ACTION", todo);

    this.ADD_TODO(todo);
  }

  @Action
  removeTodo(todo: any) {
    console.log("TODO REMOVE", todo);
    this.REMOVE_TODO(todo);
  }

  get lista() {
    return this.todos;
  }

  //   set setList(todo: string) {
  //     store.dispatch("addTodo", todo);
  //   }
}

export default UserStore;
export const storeGetModule = getModule(UserStore);
