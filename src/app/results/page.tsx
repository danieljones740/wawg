import Map from "../components/map";
import ResultsList from "../components/results-list";

export default function Results() {

    // TODO
    // - map
    // - results list
    // - summary banner with entered locations?
    // - back button?
  
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Results page</h1>
            <section>
                <Map></Map>
                <ResultsList></ResultsList>
            </section>
        </main>
    );
  }
  