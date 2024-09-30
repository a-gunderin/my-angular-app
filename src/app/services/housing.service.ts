import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housingLocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  instanceId: string;

  constructor() {
    this.instanceId = Math.random().toString().substring(2, 9);
    console.log(`HousingService instance created with ID: ${this.instanceId}`);
  }

  getInstanceId(): string {
    return this.instanceId;
  }

  url = '/assets/db.json';

  async getHousingLocationList(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const json = await data.json();
    const locations = json.locations;
    return locations ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const housingLocationList = await this.getHousingLocationList();
    return (await housingLocationList.find(hl => hl.id === id)) || undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
