import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Projects
        name="FindIt AI"
        about="An interface that connect users who lost their items and people who found their items"
        number={1234}
      />
      <Projects
        name="ProcrastinaKill"
        about="Ai powered Whatsapp bot to improve students' productivity"
        number={1231}
      />
      <Projects
        name="ClassPulse"
        about="Context based student prescense verification system with profress tracker"
        number={1212}
      />
    </div>
  );
}

export default App;