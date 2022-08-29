
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { BackgroundCarousel } from './Carousel/BackgroundCarousel';

const images = [
  "https://media.istockphoto.com/photos/smoothies-from-frozen-black-currant-red-currant-and-gooseberry-with-picture-id468330924?k=20&m=468330924&s=612x612&w=0&h=EFpb9hA2zSQm-OYuRAqFE8SgNDMKN6QII28HhYTf7hY=", 
  "https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631_960_720.jpg",
  "https://media.istockphoto.com/photos/healthy-appetizing-red-smoothie-dessert-in-glasses-picture-id1081369140?k=20&m=1081369140&s=612x612&w=0&h=A0yGDUHEXlO-JLEG9Gp1jSXU5Rw3j0KY2KGszxxyKR0=",
  "https://cdn.pixabay.com/photo/2018/02/23/19/23/smoothies-3176371_960_720.jpg"
];


const App = () =>{
  return(
    <View>
      <BackgroundCarousel images={images} />
    </View>
  
  
)}
  
export default App;
