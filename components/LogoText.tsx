import { Image as ExpoImage, ImageStyle } from 'expo-image';

type LogoTextProps = {
  style?: ImageStyle | ImageStyle[];
};

export default function LogoText({ style }: LogoTextProps) {
  return (
    <ExpoImage
      source={require('../assets/images/LogoText.png')}
      style={style}
      contentFit="contain"
    />
  )
}