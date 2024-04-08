import { FlatList, StyleSheet, View, Text } from 'react-native';

import { Location } from '../models/place';
import PlaceItem from './PlaceItem';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';


export type Place = {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id: number;
};

export type PlacesListProps = {
  places: Place[];
};

const PlacesList: React.FC<PlacesListProps> = ({ places }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function selectPlaceHandler(id: number) {
    if (id !== undefined) {
      navigation.navigate('PlaceDetails', {
      placeId: id
    })
    }
    
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some
        </Text>
      </View>
    );
  }

  return (
    <FlatList
    style={styles.list}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: { margin: 24 },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
