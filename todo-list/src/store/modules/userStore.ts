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
  public todos: string[] = [];

  @Mutation
  private ADD_TODO(todo: any) {
    this.todos.push(todo);
    console.log("TODOS STORE", this.todos);
  }
  //   @Mutation
  //   public REMOVE_TODO(state: string, todo: string) {
  //     state.todos = state.todos?.filter((item) => item !== todo);
  //   }

  @Action
  addTodo(todo: any) {
    this.ADD_TODO(todo);
  }

  @Action({ commit: "REMOVE_TODO" })
  removeTodo(todo: string) {
    return todo;
  }

  get lista() {
    return this.todos;
  }

  set setList(todo: string) {
    store.dispatch("addTodo", todo);
  }
}

export default UserStore;
export const storeGetModule = getModule(UserStore);
