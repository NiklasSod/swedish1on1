import { Image } from 'react-native';
import { iconStyles } from './LoginIcon.styles';

export default function LoginIcon() {
  return (
    <Image
      source={require('../../assets/images/LoginIcon.jpg')}
      style={iconStyles.icon}
    />
  )
}