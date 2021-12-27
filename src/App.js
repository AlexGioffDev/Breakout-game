import Container from './components/Container/Container';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-400">
      <Container >
        <Title />
      </Container>
    </div>
  );
}

export default App;
