import { Image } from 'react-native';
import { iconStyles } from './index.styles';

export default function LoginIcon() {
  return (
    <Image
      source={require('./login_icon.jpg')}
      style={iconStyles.icon}
    />
  )
}