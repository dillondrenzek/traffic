export class Base<T> {

  private static _id = 0;

  static getId(): number {
    this._id++;
    return this._id;
  }

  constructor(public data: T, public _id: number = Base.getId()) {}

  toString(): string {
    return `${this.data}`;
  }
}