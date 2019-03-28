export enum Light {
  Red,
  Yellow,
  Green,
  GreenLeft,
  GreenRight,
}

export class Stoplight {
  public active: Light[] = [Light.Red];

  constructor() {}
}

export enum Direction {
  North,
  West,
  East,
  South
}

interface IntersectionState {

}

export class Intersection {
  // public stoplights: any = []
  public ingresses = [
    { stoplight: new Stoplight(), direction: Direction.North },
    { stoplight: new Stoplight(), direction: Direction.South },
    { stoplight: new Stoplight(), direction: Direction.East },
    { stoplight: new Stoplight(), direction: Direction.West },
  ];

  public ingressMap = {
    [Direction.North]: new Stoplight(),
    [Direction.South]: new Stoplight(),
    [Direction.West]: new Stoplight(),
    [Direction.East]: new Stoplight()
  }
}