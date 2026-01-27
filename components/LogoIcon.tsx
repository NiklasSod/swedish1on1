import { Image, ImageStyle } from 'expo-image';

type LogoIconProps = {
  style?: ImageStyle | ImageStyle[];
};

export default function LogoIcon({ style }: LogoIconProps) {
  
  return (
    <Image
      source={require('../assets/images/LogoIcon.jpg')}
      style={style}
    />
  )
}
