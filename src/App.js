import React from "react";
import { fabric } from "fabric";
import cytoscape from "cytoscape";
import cydagre from "cytoscape-dagre";
import "./App.scss";
cydagre(cytoscape);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      graph: null,
      stationsCanvasVar: [],
      selectingStartOrEnd: 0,
      readyToFindWay: false,
      finishRoute: true,
      commandMessage: "",
      startStation: null,
      startLine: null,
      endStation: null,
      endLine: null,
      directDistances: [
        [
          0, 10, 18.5, 24.8, 36.4, 38.8, 35.8, 25.4, 17.6, 9.1, 16.7, 27.3,
          27.6, 29.8,
        ],
        [
          10, 0, 8.5, 14.8, 26.6, 29.1, 26.1, 17.3, 10, 3.5, 15.5, 20.9, 19.1,
          21.8,
        ],
        [
          18.5, 8.5, 0, 6.3, 18.2, 20.6, 17.6, 13.6, 9.4, 10.3, 19.5, 19.1,
          12.1, 16.6,
        ],
        [
          24.8, 14.8, 6.3, 0, 12, 14.4, 11.5, 12.4, 12.6, 16.7, 23.6, 18.6,
          10.6, 15.4,
        ],
        [
          36.4, 26.6, 18.2, 12, 0, 3, 2.4, 19.4, 23.3, 28.2, 34.2, 24.8, 14.5,
          17.9,
        ],
        [
          38.8, 29.1, 20.6, 14.4, 3, 0, 3.3, 22.3, 25.7, 30.3, 36.7, 27.6, 15.2,
          18.2,
        ],
        [
          35.8, 26.1, 17.6, 11.5, 2.4, 3.3, 0, 20, 23, 27.3, 34.2, 25.7, 12.4,
          15.6,
        ],
        [
          25.4, 17.3, 13.6, 12.4, 19.4, 22.3, 20, 0, 8.2, 20.3, 16.1, 6.4, 22.7,
          27.6,
        ],
        [
          17.6, 10, 9.4, 12.6, 23.3, 25.7, 23, 8.2, 0, 13.5, 11.2, 10.9, 21.2,
          26.6,
        ],
        [
          9.1, 3.5, 10.3, 16.7, 28.2, 30.3, 27.3, 20.3, 13.5, 0, 17.6, 24.2,
          18.7, 21.2,
        ],
        [
          16.7, 15.5, 19.5, 23.6, 34.2, 36.7, 34.2, 16.1, 11.2, 17.6, 0, 14.2,
          31.5, 35.5,
        ],
        [
          27.3, 20.9, 19.1, 18.6, 24.8, 27.6, 25.7, 6.4, 10.9, 24.2, 14.2, 0,
          28.8, 33.6,
        ],
        [
          27.6, 19.1, 12.1, 10.6, 14.5, 15.2, 12.4, 22.7, 21.2, 18.7, 31.5,
          28.8, 0, 5.1,
        ],
        [
          29.8, 21.8, 16.6, 15.4, 17.9, 18.2, 15.6, 27.6, 26.6, 21.2, 35.5,
          33.6, 5.1, 0,
        ],
      ],
      realDistances: [
        [
          0,
          10,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          10,
          0,
          8.5,
          null,
          null,
          null,
          null,
          null,
          10,
          3.5,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          8.5,
          0,
          6.3,
          null,
          null,
          null,
          null,
          9.4,
          null,
          null,
          null,
          18.7,
          null,
        ],
        [
          null,
          null,
          6.3,
          0,
          13,
          null,
          null,
          15.3,
          null,
          null,
          null,
          null,
          12.8,
          null,
        ],
        [
          null,
          null,
          null,
          13,
          0,
          3,
          2.4,
          30,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          3,
          0,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          2.4,
          null,
          0,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          15.3,
          30,
          null,
          null,
          0,
          9.6,
          null,
          null,
          6.4,
          null,
          null,
        ],
        [
          null,
          10,
          9.4,
          null,
          null,
          null,
          null,
          9.6,
          0,
          null,
          12.2,
          null,
          null,
          null,
        ],
        [
          null,
          3.5,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          12.2,
          null,
          0,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          6.4,
          null,
          null,
          null,
          0,
          null,
          null,
        ],
        [
          null,
          null,
          18.7,
          12.8,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          0,
          5.1,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          5.1,
          0,
        ],
      ],
      stationsLines: [
        ["blue"],
        ["blue", "yellow"],
        ["blue", "red"],
        ["blue", "green"],
        ["blue", "yellow"],
        ["blue"],
        ["yellow"],
        ["yellow", "green"],
        ["yellow", "red"],
        ["yellow"],
        ["red"],
        ["green"],
        ["green", "red"],
        ["green"],
      ],
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
      this.setState({
        startStation: station,
        startLine: this.state.stationsLines[station][0],
        selectingStartOrEnd: 1,
      });
    } else {
      this.setState({
        endStation: station,
        endLine: this.state.stationsLines[station][0],
        selectingStartOrEnd: 0,
        readyToFindWay: true,
      });
    }
  }

  findBetterWay() {
    this.resetCanvas();
    this.setState({ finishRoute: false });
    let cy = this.buildGraph();
    this.setState({ graph: cy });
    //Starta o algoritmo começando pela estação inicial e a linha inicial
    //Pinta a primeira estação de vermelho no canvas
    this.aStar(null, this.state.startStation, this.state.startLine, cy, 0);
    this.state.stationsCanvasVar[this.state.startStation].set("fill", "red");
    this.state.canvas.renderAll();
  }

  resetCanvas() {
    //Reseta o estado do canvas
    for (let i = 0; i < this.state.stationsCanvasVar.length; i++) {
      this.state.stationsCanvasVar[i].set("fill", "white");
    }
    this.state.canvas.renderAll();
    if (this.state.graph) {
      let element = document.getElementById("better-way-graph");
      element.style.height = 130 + "px";
      this.state.graph.resize();
      this.state.graph.fit();
      this.state.graph.center();
    }
  }

  addNodesToGraph(
    heuristicDistances,
    previousStation,
    currentStation,
    currentLine,
    currentRow,
    cy
  ) {
    //Adiciona os nós filhos de um nó pai e as respectivas conexões
    heuristicDistances.forEach((heuristicDistance, index) => {
      if (index !== previousStation && heuristicDistance !== null) {
        for (let i = 0; i < this.state.stationsLines[index].length; i++) {
          cy.add([
            {
              group: "nodes",
              data: {
                id:
                  "E" +
                  (index + 1) +
                  this.state.stationsLines[index][i] +
                  "row" +
                  (currentRow + 1),
                station:
                  "E" + (index + 1) + " " + this.state.stationsLines[index][i],
              },
            },
            {
              group: "edges",
              data: {
                id:
                  "E" +
                  (currentStation + 1) +
                  "E" +
                  (index + 1) +
                  this.state.stationsLines[index][i] +
                  "row" +
                  (currentRow + 1),
                source:
                  "E" + (currentStation + 1) + currentLine + "row" + currentRow,
                target:
                  "E" +
                  (index + 1) +
                  this.state.stationsLines[index][i] +
                  "row" +
                  (currentRow + 1),
                station:
                  "E" + (index + 1) + " " + this.state.stationsLines[index][i],
              },
            },
          ]);
        }
      }
    });
    cy.elements().layout({ name: "dagre" }).run();
    let element = document.getElementById("better-way-graph");
    let currentHeight = element.offsetHeight;
    element.style.height = currentHeight + 130 + "px";
    cy.resize();
    cy.fit();
    cy.center();
  }

  calcHeuristic(
    newStationIndex,
    newStationLine,
    currentStationIndex,
    currentStationLine
  ) {
    /*
      Primeiro calcula a heurística considerando apenas o tempo para um trem de 30km/h percorrer a distância
      real e a direta entre as estações
    */
    let timeToTravelHeuristic =
      (this.state.realDistances[newStationIndex][currentStationIndex] +
        this.state.directDistances[newStationIndex][this.state.endStation]) *
      2;

    // Depois, considera se na heurística de distância real há a troca de linha de estação
    if (currentStationLine !== newStationLine) {
      timeToTravelHeuristic += 4;
    }

    /* 
      Por fim, considera estatísticamente, para a heurística de distância direta, quantas possibilidades
      no pior caso podem ocorrer de troca de linhas de estação
    */
    timeToTravelHeuristic +=
      this.state.stationsLines[this.state.endStation].filter(
        (n) => n !== newStationLine
      ).length * 4;

    return timeToTravelHeuristic;
  }

  aStar(previousStation, currentStation, currentLine, cy, currentRow) {
    // Primeiro, contrói o array de heurísticas considerando as estações em suas respectivas linhas
    let heuristicDistances = [];
    this.state.realDistances[currentStation].forEach((realDis, index) => {
      if (realDis === null || realDis === 0) {
        heuristicDistances.push(null);
      } else {
        heuristicDistances.push([]);
        this.state.stationsLines[index].forEach((line) => {
          heuristicDistances[heuristicDistances.length - 1].push(
            this.calcHeuristic(index, line, currentStation, currentLine)
          );
        });
      }
    });

    // Adiciona os nós no grafo figurativo
    this.addNodesToGraph(
      heuristicDistances,
      previousStation,
      currentStation,
      currentLine,
      currentRow,
      cy
    );

    // Calcula o mínimo para o próximo passo do A*
    let auxHeuristicDistances = [...heuristicDistances];
    let indexMinStation = null;
    let indexLineMinStation = null;
    let valueMinStation = null;
    for (let i = 0; i < auxHeuristicDistances.length; i++) {
      if (auxHeuristicDistances[i] !== null) {
        if (this.state.endStation === i) {
          indexMinStation = i;
          indexLineMinStation = this.state.stationsLines[i].indexOf(
            this.state.endLine
          );
          break;
        } else {
          let minDistance = Math.min(...auxHeuristicDistances[i]);
          let indexMinLine;
          if (
            auxHeuristicDistances[i].every(
              (distance) => distance === auxHeuristicDistances[i][0]
            )
          ) {
            indexMinLine =
              this.state.stationsLines[i].indexOf(currentLine) !== -1
                ? this.state.stationsLines[i].indexOf(currentLine)
                : 0;
          } else {
            indexMinLine = auxHeuristicDistances[i].indexOf(minDistance);
          }
          if (
            (minDistance < valueMinStation || valueMinStation === null) &&
            this.state.realDistances[i].filter((element) => element !== null)
              .length > 2
          ) {
            valueMinStation = minDistance;
            indexMinStation = i;
            indexLineMinStation = indexMinLine;
          }
        }
      }
    }

    //Atualiza a mensagem de direacionamento e o canvas
    this.setState({
      commandMessage: `Vá para a estação E${indexMinStation + 1} `,
    });
    this.state.stationsCanvasVar[indexMinStation].set("fill", "red");
    cy.nodes(
      `[id = "E${indexMinStation + 1}${
        this.state.stationsLines[indexMinStation][indexLineMinStation]
      }row${currentRow + 1}"]`
    ).style("background-color", "red");
    this.state.canvas.renderAll();

    setTimeout(() => {
      // Caso não seja a estação final, faz o próximo passo do A*
      if (indexMinStation !== this.state.endStation) {
        this.aStar(
          currentStation,
          indexMinStation,
          this.state.stationsLines[indexMinStation][indexLineMinStation],
          cy,
          currentRow + 1
        );
      } else {
        // Caso seja a estação final, finaliza o percurso
        this.setState({
          finishRoute: true,
        });
      }
    }, 2000);
  }

  buildGraph() {
    let element = document.getElementById("better-way-graph");
    let cy = cytoscape({
      zoomingEnabled: false,
      zoom: 1,
      elements: {
        nodes: [],
        edges: [],
      },
      container: element,
      style: [
        {
          selector: "node",
          css: {
            width: 50,
            height: 50,
            "background-color": "#61bffc",
            content: "data(station)",
            color: "white",
          },
        },
      ],
      layout: {
        name: "dagre",
      },
    });
    cy.center();
    cy.elements().layout({ name: "dagre" }).run();
    cy.add([
      {
        group: "nodes",
        data: {
          id:
            "E" +
            (this.state.startStation + 1) +
            this.state.startLine +
            "row" +
            0,
          station:
            "E" + (this.state.startStation + 1) + " " + this.state.startLine,
        },
      },
    ]);
    cy.nodes(
      `[id = "E${this.state.startStation + 1}${this.state.startLine}row0"]`
    ).style("background-color", "red");
    cy.resize();
    cy.fit();
    return cy;
    // var x = 1;
    // cy.bind("click", "node", function () {
    //   x += 0.5;
    //   cy.elements().layout({ name: "dagre", spacingFactor: x }).run();
    // });
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

    let canvas = new fabric.Canvas("subway-canvas", {
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

    e1.on("selected", () => this.changeSelectedStation(0));
    e2.on("selected", () => this.changeSelectedStation(1));
    e3.on("selected", () => this.changeSelectedStation(2));
    e4.on("selected", () => this.changeSelectedStation(3));
    e5.on("selected", () => this.changeSelectedStation(4));
    e6.on("selected", () => this.changeSelectedStation(5));
    e7.on("selected", () => this.changeSelectedStation(6));
    e8.on("selected", () => this.changeSelectedStation(7));
    e9.on("selected", () => this.changeSelectedStation(8));
    e10.on("selected", () => this.changeSelectedStation(9));
    e11.on("selected", () => this.changeSelectedStation(10));
    e12.on("selected", () => this.changeSelectedStation(11));
    e13.on("selected", () => this.changeSelectedStation(12));
    e14.on("selected", () => this.changeSelectedStation(13));

    this.setState({
      canvas: canvas,
      stationsCanvasVar: [
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
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>A* no Metrô de Paris</h1>
        </header>
        <main>
          <div className="side-canvas">
            <div className="command-message">{this.state.commandMessage}</div>
            <canvas id="subway-canvas"></canvas>
            <div className="distance-table">
              <h2>Tabela de distâncias diretas (em Km)</h2>
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <th scope="col">E1</th>
                    <th scope="col">E2</th>
                    <th scope="col">E3</th>
                    <th scope="col">E4</th>
                    <th scope="col">E5</th>
                    <th scope="col">E6</th>
                    <th scope="col">E7</th>
                    <th scope="col">E8</th>
                    <th scope="col">E9</th>
                    <th scope="col">E10</th>
                    <th scope="col">E11</th>
                    <th scope="col">E12</th>
                    <th scope="col">E13</th>
                    <th scope="col">E14</th>
                  </tr>
                  {this.state.directDistances.map(
                    (directDistanceArray, index) => (
                      <tr key={"E" + (index + 1)}>
                        <th scope="row">{"E" + (index + 1)}</th>
                        {directDistanceArray.map((distance, index) => (
                          <td key={index}>{distance}</td>
                        ))}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="distance-table">
              <h2>Tabela de distâncias reais (em Km)</h2>
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <th scope="col">E1</th>
                    <th scope="col">E2</th>
                    <th scope="col">E3</th>
                    <th scope="col">E4</th>
                    <th scope="col">E5</th>
                    <th scope="col">E6</th>
                    <th scope="col">E7</th>
                    <th scope="col">E8</th>
                    <th scope="col">E9</th>
                    <th scope="col">E10</th>
                    <th scope="col">E11</th>
                    <th scope="col">E12</th>
                    <th scope="col">E13</th>
                    <th scope="col">E14</th>
                  </tr>
                  {this.state.realDistances.map((realDistanceArray, index) => (
                    <tr key={"E" + (index + 1)}>
                      <th scope="row">{"E" + (index + 1)}</th>
                      {realDistanceArray.map((distance, index) => (
                        <td key={index}>{distance}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="side-control">
            <div className="stations-selected">
              <h2>
                Selecione no mapa ao lado a estação e a linha que você se
                encontra
              </h2>
              <div>
                {this.state.startStation !== null ? (
                  <span>E{this.state.startStation + 1}</span>
                ) : (
                  <span className="no-station-text">Sem estação definida</span>
                )}
                {this.state.startStation !== null && (
                  <select
                    name="startLine"
                    disabled={this.state.finishRoute === false}
                    onChange={(e) => {
                      this.setState({ startLine: e.target.value });
                    }}
                    value={this.state.startLine}
                  >
                    {this.state.stationsLines[this.state.startStation].map(
                      (line, index) => (
                        <option key={index} value={line}>
                          {line === "red"
                            ? "Vermelha"
                            : line === "green"
                            ? "Verde"
                            : line === "blue"
                            ? "Azul"
                            : line === "yellow"
                            ? "Amarela"
                            : ""}
                        </option>
                      )
                    )}
                  </select>
                )}
              </div>
            </div>
            <div className="stations-selected">
              <h2>Agora, selecione a estação e a linha que você deseja ir</h2>
              <div>
                {this.state.endStation !== null ? (
                  <span>E{this.state.endStation + 1}</span>
                ) : (
                  <span className="no-station-text">Sem estação definida</span>
                )}
                {this.state.endStation !== null && (
                  <select
                    name="endLine"
                    disabled={this.state.finishRoute === false}
                    onChange={(e) => {
                      this.setState({ endLine: e.target.value });
                    }}
                  >
                    {this.state.stationsLines[this.state.endStation].map(
                      (line, index) => (
                        <option key={index} value={line}>
                          {line === "red"
                            ? "Vermelha"
                            : line === "green"
                            ? "Verde"
                            : line === "blue"
                            ? "Azul"
                            : line === "yellow"
                            ? "Amarela"
                            : ""}
                        </option>
                      )
                    )}
                  </select>
                )}
              </div>
            </div>
            <button
              className="find-way-button"
              disabled={
                this.state.readyToFindWay === false ||
                this.state.finishRoute === false
              }
              onClick={() => this.findBetterWay()}
            >
              Encontrar melhor caminho!
            </button>
            <div id="better-way-graph"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
