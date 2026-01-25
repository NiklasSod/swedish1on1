import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
import { iconStyles } from './LogoIcon.styles';

export default function LogoIcon() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <Image
      source={require('../../assets/images/LogoIcon.jpg')}
      style={[iconStyles.icon, { marginTop: isLandscape ? 10 : 50 }]}
    />
  )
}