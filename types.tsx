import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: { lat: number; lng: number };
  Map: { initialLat: number; initialLng: number };
  PlaceDetails: { placeId: number };
};

export type AllPlacesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AllPlaces'
>;
export type AddPlace = NativeStackScreenProps<RootStackParamList, 'AddPlace'>;
export type MapDetailsScreenProp = NativeStackScreenProps<RootStackParamList, 'Map'>;
export type PlaceDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PlaceDetails'
>;
