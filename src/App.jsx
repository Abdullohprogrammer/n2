import Loading from './components/Loading';
import Tours from './components/Tours';
import { ToursProvider, useToursContext } from './ToursContetx';

function App() {
  const { loading, tours, removeTour, fetchTours } = useToursContext();

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

const AppWithContext = () => {
  return (
    <ToursProvider>
      <App />
    </ToursProvider>
  );
};

export default AppWithContext;