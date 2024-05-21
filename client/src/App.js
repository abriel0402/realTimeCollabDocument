import Document from "./components/Document";

function App() {
  return (
    <div>
      <Document />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.js"
        integrity="sha512-luMnTJZ7oEchNDZAtQhgjomP1eZefnl82ruTH/3Oj/Yu5qYtwL7+dVRccACS/Snp1lFXq188XFipHKYE75IaQQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </div>
  );
}

export default App;
