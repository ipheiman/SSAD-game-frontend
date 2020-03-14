import React from "react";
import Table from "react-bootstrap/Table";

import "./styles.css";

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top10: [
        { username: "Hei", result: "01:20" },
        { username: "Elroy", result: "01:20" },
        { username: "Qx", result: "10:00" }
      ]
    };
  }

  render() {
    const { top10 } = this.state;
    return (
      <div className="outerWrapper">
        <Table striped bordered condensed hover className="colorOrange">
          <thead className="colorWhite">
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Time taken to reach the goal (mm:ss)</th>
            </tr>
          </thead>
          <tbody>
            {top10.map((row, index) => (
              <tr key={row.username}>
                <td>{index + 1}</td>
                <td>{row.username}</td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Leaderboard;
