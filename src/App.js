import React from "react";
import { fabric } from "fabric";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectingStartOrEnd: 0,
      readyToFindWay: false,
      startStation: null,
      endStation: null,
    };
  }

  componentDidMount() {
    this.startCanvas();
  }

  buildStation(top, left) {
    return new fabric.Circle({
      top: top,
      left: left,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
      hasControls: false,
      hasBorders: true,
      hoverCursor: "pointer",
      moveCursor: "none",
    });
  }

  buildLine(path, color) {
    return new fabric.Path(path, {
      stroke: color,
      strokeWidth: 10,
      fill: "",
      selectable: false,
      hoverCursor: "default",
      moveCursor: "default",
    });
  }

  buildText(text, top, left) {
    return new fabric.Text(text, {
      top: top,
      left: left,
      fontSize: 30,
      selectable: false,
      hoverCursor: "default",
      moveCursor: "default",
    });
  }

  changeSelectedStation(station) {
    if (this.state.selectingStartOrEnd === 0) {
      this.setState({ startStation: station, selectingStartOrEnd: 1 });
    } else {
      this.setState({
        endStation: station,
        selectingStartOrEnd: 0,
        readyToFindWay: true,
      });
    }
  }

  startCanvas() {
    let e1 = this.buildStation(350, 40);
    let e2 = this.buildStation(400, 200);
    let e3 = this.buildStation(450, 350);
    let e4 = this.buildStation(500, 500);
    let e5 = this.buildStation(600, 700);
    let e6 = this.buildStation(650, 750);
    let e7 = this.buildStation(630, 650);
    let e8 = this.buildStation(200, 530);
    let e9 = this.buildStation(225, 335);
    let e10 = this.buildStation(480, 140);
    let e11 = this.buildStation(50, 230);
    let e12 = this.buildStation(80, 530);
    let e13 = this.buildStation(700, 450);
    let e14 = this.buildStation(790, 415);

    let blueLine = this.buildLine("M 50 360 L 650 555 L 760 660", "blue");
    let yellowLine = this.buildLine(
      "M 145 500 L 365 210 L 625 210 L 650 240 L 650 300 L 780 450 L 780 575 L 650 645",
      "yellow"
    );
    let redLine = this.buildLine(
      "M 240 60 L 340 180 L 375 600 L 420 630 L 370 670 L 460 710",
      "red"
    );
    let greenLine = this.buildLine(
      "M 540 85 L 540 210 L 600 230 L 510 520 L 485 590 L 510 600 L 425 800",
      "green"
    );

    let e1Text = this.buildText("E1", 310, 40);
    let e2Text = this.buildText("E2", 360, 200);
    let e3Text = this.buildText("E3", 415, 370);
    let e4Text = this.buildText("E4", 470, 530);
    let e5Text = this.buildText("E5", 560, 700);
    let e6Text = this.buildText("E6", 610, 750);
    let e7Text = this.buildText("E7", 590, 650);
    let e8Text = this.buildText("E8", 160, 550);
    let e9Text = this.buildText("E9", 190, 300);
    let e10Text = this.buildText("E10", 435, 120);
    let e11Text = this.buildText("E11", 10, 230);
    let e12Text = this.buildText("E12", 40, 530);
    let e13Text = this.buildText("E13", 680, 485);
    let e14Text = this.buildText("E14", 760, 450);

    let canvas = new fabric.Canvas("subwayCanvas", {
      height: 900,
      width: 900,
      backgroundColor: "#F4FAFF",
    });
    canvas
      .add(
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7,
        e8,
        e9,
        e10,
        e11,
        e12,
        e13,
        e14,
        blueLine,
        yellowLine,
        redLine,
        greenLine,
        e1Text,
        e2Text,
        e3Text,
        e4Text,
        e5Text,
        e6Text,
        e7Text,
        e8Text,
        e9Text,
        e10Text,
        e11Text,
        e12Text,
        e13Text,
        e14Text
      )
      .sendToBack(blueLine)
      .sendToBack(yellowLine)
      .sendToBack(redLine)
      .sendToBack(greenLine);

    e1.on("selected", () => this.changeSelectedStation("E1"));
    e2.on("selected", () => this.changeSelectedStation("E2"));
    e3.on("selected", () => this.changeSelectedStation("E3"));
    e4.on("selected", () => this.changeSelectedStation("E4"));
    e5.on("selected", () => this.changeSelectedStation("E5"));
    e6.on("selected", () => this.changeSelectedStation("E6"));
    e7.on("selected", () => this.changeSelectedStation("E7"));
    e8.on("selected", () => this.changeSelectedStation("E8"));
    e9.on("selected", () => this.changeSelectedStation("E9"));
    e10.on("selected", () => this.changeSelectedStation("E10"));
    e11.on("selected", () => this.changeSelectedStation("E11"));
    e12.on("selected", () => this.changeSelectedStation("E12"));
    e13.on("selected", () => this.changeSelectedStation("E13"));
    e14.on("selected", () => this.changeSelectedStation("E14"));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>A* no Metrô de Paris</h1>
        </header>
        <main>
          <div className="side-control">
            <div className="stations-selected">
              <h2>Selecione no mapa ao lado a estação que você se encontra</h2>
              {this.state.startStation ? (
                <span>{this.state.startStation}</span>
              ) : (
                <span className="no-station-text">Sem estação definida</span>
              )}
            </div>
            <div className="stations-selected">
              <h2>Agora, selecione a estação que você deseja ir</h2>
              {this.state.endStation ? (
                <span>{this.state.endStation}</span>
              ) : (
                <span className="no-station-text">Sem estação definida</span>
              )}
            </div>
            <button
              className="find-way-button"
              disabled={this.state.readyToFindWay === false}
            >
              Encontrar melhor caminho!
            </button>
          </div>
          <canvas id="subwayCanvas"></canvas>
        </main>
      </div>
    );
  }
}

export default App;
