import { Image as ExpoImage } from 'expo-image';
import { imageStyles } from './LogoText.styles';

export default function LogoText() {
  return (
    <ExpoImage
      source={require('../../assets/images/LogoText.png')}
      style={imageStyles.image}
      contentFit="contain"
    />
  )
}