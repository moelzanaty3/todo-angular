export class Todo {
  id: number;
  title: string = '';
  body: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
