import { Image } from 'expo-image';
import { imageStyles } from './LogoText.styles';

export default function LogoText() {
  return (
    <Image
      source={require('../../assets/images/LogoText.png')}
      style={imageStyles.image}
    />
  )
}