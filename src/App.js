import "./App.css";
import { connect } from "react-redux";
import ShowNote from "./components/ShowNote";
import AddNote from "./components/AddNote";

function App(props) {
  return (
    <div className="row" style={{ marginTop: "3%" }}>
      <AddNote />
      {props.note.map((note, index) => {
        return <ShowNote noteData={note} key={note.id} />;
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, null)(App);
