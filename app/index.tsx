import { Redirect } from 'expo-router';

export default function Index() {
  // Direkt redirect yap - daha temiz çözüm
  return <Redirect href="/(onboarding)/get-started" />;
}