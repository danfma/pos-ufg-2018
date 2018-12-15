import {EventEmitter, Injectable} from '@angular/core';
import {Location} from './location';

@Injectable()
export class LocationManagerService {
  private _locations: Location[] = [];
  private _locationsChanged = new EventEmitter<Location[]>();

  readonly locationsChanged = this._locationsChanged.asObservable();

  get locations() {
    return this._locations;
  }

  addLocation(name: string) {
    const newLocation = new Location(name);

    this._locations = [
      ...this._locations,
      newLocation
    ];

    console.log('LOCATIONS', this._locations);
    this._locationsChanged.emit(this._locations);
  }
}
