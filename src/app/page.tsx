import Locations from './components/locations';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Where are we going?</h1>
      <Locations></Locations>
    </main>
  );
}
