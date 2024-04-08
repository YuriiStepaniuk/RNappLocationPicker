export type Location = {
  lat: number;
  lng: number;
  address: string;
};

export class Place {
  //Props
  title: string;
  imageUri: string;

  location: Location;
  id: number | undefined;

  constructor(title: string, imageUri: string, location: Location, id?: number) {
    this.title = title;
    this.imageUri = imageUri;

    this.location = {
      lat: location.lat,
      lng: location.lng,
      address: location.address,
    };
    this.id = id;
  }
}
