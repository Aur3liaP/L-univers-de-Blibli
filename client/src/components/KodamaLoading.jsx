import "../styles/KodamaLoading.css";

function KodamaLoading() {
  return (
    <div className="wrapper">
      <div className="kodama">
        <div className="body">
          <div className="legs"> </div>
        </div>
        <div className="head">
          <div className="mouth"> </div>
        </div>
      </div>
      <h1 className="dialog js-dialog">— Chargement —</h1>
    </div>
  );
}

export default KodamaLoading;
