import "./App.scss";
import Header from "./components/Header";
import Songs from "./components/Songs/Songs";


function App() {
  return (
    <>
      <div className="container  bg-slate-600 min-h-screen">
        <Header />
        <main>
          <Songs />
        </main>
      </div>
    </>
  );
}

export default App;
