import { useEffect } from 'react';
import useAuthStore from '../state/AuthStore';

function LoadingScreen() {
  const { tryLocalSignin } = useAuthStore();

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
}

export default LoadingScreen;
