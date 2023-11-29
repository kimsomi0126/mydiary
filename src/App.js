import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Layout, MainWrap, Wrap } from "./styles/layout";

function App() {
  return (
    <Layout>
      <Wrap>
        <Header>title</Header>
        <MainWrap>My Diary</MainWrap>
        <Footer />
      </Wrap>
    </Layout>
  );
}

export default App;
