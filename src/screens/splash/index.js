import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../utils';
import {LogoGojek, LogoGoto} from '../../assets';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 4000);
  }, [navigation]);

  return (
    <>
      <View style={styles.pageSplash}>
        <View style={styles.logoGojek}>
          <LogoGojek height={140} width={140} />
        </View>
        <View style={styles.containerGoto}>
          <Text style={styles.textGoto}>from</Text>
          <Image
            source={LogoGoto}
            style={styles.logoGoto}
            resizeMode="contain"
          />
        </View>
      </View>
    </>
  );
}
