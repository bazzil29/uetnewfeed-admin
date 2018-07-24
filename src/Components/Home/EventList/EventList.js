import Event from "./Event/Event";
import * as React from "react/cjs/react.development";


export default class EventList extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </div>
    )
  }
}
