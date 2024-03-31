import { StatusBar } from 'react-native';
import Home from './scr/pages/Home';

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <Home/>
    </>
  );
}


