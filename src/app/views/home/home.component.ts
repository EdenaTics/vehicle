import { Component, OnInit } from '@angular/core';
import { IFleet } from 'src/app/shared/services/fleet/IFleet';
import { FleetsService } from 'src/app/shared/services/fleet/Fleets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fleetsService: IFleet;

  constructor(fleetService: FleetsService) {
    this.fleetsService = fleetService;
  }

  ngOnInit() {
    this.fleetsService.getMyFleets().subscribe(
      value => {
        console.log(value.shift());
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }
}
