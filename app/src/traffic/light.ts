export class Stage {
  constructor(
    public light: LightState,
    public duration: number
  ) { }
}

export enum LightState {
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green'
}