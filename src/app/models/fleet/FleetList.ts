import { Fleet } from './Fleet';

export class FleetList {
  fleets: Array<Fleet>;
  constructor(fleets: Array<Fleet>) {
    this.fleets = fleets;
  }
}
