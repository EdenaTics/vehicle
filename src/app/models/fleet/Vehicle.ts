export class Vehicle {
  device: Device;
  energy: string;
  id: string;
  licensePlate: string;
  loan: Loan;
  name: string;
  tags: Tag[];
}

export class Device {
  brand: string;
  id: string;
}

export class Loan {
  driver: Driver;
  endedAt: string;
  id: string;
  startedAt: string;
}

export class Driver {
  firstName: string;
  gender: string;
  id: string;
  lastName: string;
}

export class Tag {
  color: string;
  icon: string;
  id: string;
  name: string;
}
