import React from "react";
import { fabric } from "fabric";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canvas: null, stations: [] };
  }

  componentDidMount() {
    this.startCanvas();
  }

  startCanvas() {
    let e1 = new fabric.Circle({
      top: 350,
      left: 40,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e2 = new fabric.Circle({
      top: 400,
      left: 200,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e3 = new fabric.Circle({
      top: 450,
      left: 350,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e4 = new fabric.Circle({
      top: 500,
      left: 500,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e5 = new fabric.Circle({
      top: 600,
      left: 700,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e6 = new fabric.Circle({
      top: 650,
      left: 750,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e7 = new fabric.Circle({
      top: 630,
      left: 650,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e8 = new fabric.Circle({
      top: 200,
      left: 530,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e9 = new fabric.Circle({
      top: 225,
      left: 335,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e10 = new fabric.Circle({
      top: 480,
      left: 140,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e11 = new fabric.Circle({
      top: 50,
      left: 230,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e12 = new fabric.Circle({
      top: 80,
      left: 530,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e13 = new fabric.Circle({
      top: 700,
      left: 450,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let e14 = new fabric.Circle({
      top: 790,
      left: 415,
      radius: 10,
      fill: "white",
      strokeWidth: 2,
      stroke: "black",
      selectable: false,
    });
    let blueLine = new fabric.Path("M 50 360 L 650 555 L 760 660", {
      stroke: "blue",
      strokeWidth: 10,
      fill: "",
      selectable: false,
    });
    let yellowLine = new fabric.Path(
      "M 145 500 L 365 210 L 625 210 L 650 240 L 650 300 L 780 450 L 780 575 L 650 645",
      {
        stroke: "yellow",
        strokeWidth: 10,
        fill: "",
        selectable: false,
      }
    );
    let redLine = new fabric.Path(
      "M 240 60 L 340 180 L 375 600 L 420 630 L 370 670 L 460 710",
      {
        stroke: "red",
        strokeWidth: 10,
        fill: "",
        selectable: false,
      }
    );
    let greenLine = new fabric.Path(
      "M 540 85 L 540 210 L 600 230 L 510 520 L 485 590 L 510 600 L 425 800",
      {
        stroke: "green",
        strokeWidth: 10,
        fill: "",
        selectable: false,
      }
    );
    let e1Text = new fabric.Text("E1", {
      top: 310,
      left: 40,
      fontSize: 30,
      selectable: false,
    });
    let e2Text = new fabric.Text("E2", {
      top: 360,
      left: 200,
      fontSize: 30,
      selectable: false,
    });
    let e3Text = new fabric.Text("E3", {
      top: 415,
      left: 370,
      fontSize: 30,
      selectable: false,
    });
    let e4Text = new fabric.Text("E4", {
      top: 470,
      left: 530,
      fontSize: 30,
      selectable: false,
    });
    let e5Text = new fabric.Text("E5", {
      top: 560,
      left: 700,
      fontSize: 30,
      selectable: false,
    });
    let e6Text = new fabric.Text("E6", {
      top: 610,
      left: 750,
      fontSize: 30,
      selectable: false,
    });
    let e7Text = new fabric.Text("E7", {
      top: 590,
      left: 650,
      fontSize: 30,
      selectable: false,
    });
    let e8Text = new fabric.Text("E8", {
      top: 160,
      left: 550,
      fontSize: 30,
      selectable: false,
    });
    let e9Text = new fabric.Text("E9", {
      top: 190,
      left: 300,
      fontSize: 30,
      selectable: false,
    });
    let e10Text = new fabric.Text("E10", {
      top: 435,
      left: 120,
      fontSize: 30,
      selectable: false,
    });
    let e11Text = new fabric.Text("E11", {
      top: 10,
      left: 230,
      fontSize: 30,
      selectable: false,
    });
    let e12Text = new fabric.Text("E12", {
      top: 40,
      left: 530,
      fontSize: 30,
      selectable: false,
    });
    let e13Text = new fabric.Text("E13", {
      top: 680,
      left: 485,
      fontSize: 30,
      selectable: false,
    });
    let e14Text = new fabric.Text("E14", {
      top: 760,
      left: 450,
      fontSize: 30,
      selectable: false,
    });
    this.setState({
      canvas: new fabric.Canvas("subwayCanvas", {
        height: 900,
        width: 900,
        backgroundColor: "#F4FAFF",
      })
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
        .sendToBack(greenLine),
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>A* no Metrô de Paris</h1>
        </header>
        <main>
          <canvas id="subwayCanvas"></canvas>
        </main>
      </div>
    );
  }
}

export default App;
