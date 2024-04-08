import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';


import PlacesList from '../components/Places/PlacesList';
import { Place } from '../components/Places/PlacesList';
import { fetchPlaces } from '../util/database';

const AllPlaces: React.FC = () => {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places)
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces(
      //   (curPlaces) => [...curPlaces, route.params.place] as Place[]
      // );
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
