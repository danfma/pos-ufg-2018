import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Location, LocationManagerService} from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnDestroy {
  protected locationName = '';
  protected locations: Location[];
  private readonly _locationsChangedSubscription: Subscription;

  constructor(
    readonly locationManager: LocationManagerService) {

    this.locations = this.locationManager.locations;

    this._locationsChangedSubscription =
      this.locationManager.locationsChanged
        .subscribe(locations => {
          this.locations = locations;
        });
  }

  ngOnDestroy(): void {
    this._locationsChangedSubscription.unsubscribe();
  }

  addLocation() {
    this.locationManager.addLocation(this.locationName);
    this.locationName = '';
  }
}
