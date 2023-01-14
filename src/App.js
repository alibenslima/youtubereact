import "./App.css";
import CommentPart from "./composants/commentPart/CommentPart";
import HeaderPart from "./composants/headerPart/HeaderPart";
import ListvideoPart from "./composants/listvideoPart/ListvideoPart";
import VideoouvertPart from "./composants/videoouvertPart/VideoouvertPart";

function App() {
  return (
    <div className="App">
      <HeaderPart />
      <div id="gblocgauche">
        <div id="vidcomment">
          <VideoouvertPart />
          <CommentPart />
        </div>
        <div>
          <ListvideoPart />
        </div>
      </div>
    </div>
  );
}

export default App;
