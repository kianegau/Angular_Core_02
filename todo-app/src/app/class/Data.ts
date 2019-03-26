export class ListTodo {
  id: number;
  name: string;
  isCompleted: boolean;
  constructor(text) {
    this.id = new Date().getTime();
    this.name = text;
    this.isCompleted = false;
  }
}
