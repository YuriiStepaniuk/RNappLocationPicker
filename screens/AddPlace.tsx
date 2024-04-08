
import PlaceForm from '../components/Places/PlaceForm';
import { AddPlace } from '../types';
import { Location } from '../components/models/place';
import { insertPlace } from '../util/database';

export interface Place {
  title: string;
  imageUri: string;
  location: Location;
  id: number | undefined;
}

const ADDPlace: React.FC<AddPlace> = ({ navigation }) => {
  async function createPlaceHandler(place: Place) {
   await insertPlace(place);
    navigation.navigate('AllPlaces');
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default ADDPlace;
