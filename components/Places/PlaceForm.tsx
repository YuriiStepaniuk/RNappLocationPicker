import { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import ImagePicker from './ImagePicker';
import LocationPicker, { MapLocation } from './LocationPicker';
import { Button } from '../UI/Button';
import { Place } from '../models/place';

interface PlaceFormProps {
  onCreatePlace: (place: Place) => void
}

type Location = {
  lat: number; lng: number; address: string
}

const PlaceForm: React.FC<PlaceFormProps> = ({onCreatePlace}) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickedLocation, setPickedLocation] = useState<Location | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function changeTitleHandler(enteredText: string) {
    setEnteredTitle(enteredText);
  }

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, selectedImage as string, pickedLocation as Location)
    onCreatePlace(placeData)
  }

  function takeImageHandler(imageUri: string): void {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler = useCallback(
    (location: Location) => setPickedLocation(location),
    []
  );

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
