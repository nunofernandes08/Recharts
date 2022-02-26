import React, { useEffect, useState } from "react";

import "./styles.css";

import {
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  makeStyles,
  TextField
} from "@material-ui/core";

import Tooltip2 from "@material-ui/core/Tooltip";

import { DataGrid, GridColDef, GridRowId } from "@material-ui/data-grid";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Brush,
  ReferenceLine,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer
} from "recharts";

const hiddeTableCheckboxAll = makeStyles({
  root: {
    "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
      display: "none"
    }
  }
});

export default function App() {
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
  const [disabled, setDisable] = useState(true);
  const [saveDisabled, setSaveDisable] = useState(true);
  const [x, setX] = useState(0);
  const [markerName, setMarkerName] = useState("");

  const hiddeCheckBox = hiddeTableCheckboxAll();

  const pves = [
    {
      type: "PVES",
      x: 1,
      y: 50
    },
    {
      type: "PVES",
      x: 2,
      y: 20
    },
    {
      type: "PVES",
      x: 3,
      y: 5
    },
    {
      type: "PVES",
      x: 4,
      y: 50
    },
    {
      type: "PVES",
      x: 5,
      y: 100
    },
    {
      type: "PVES",
      x: 6,
      y: 5
    },
    {
      type: "PVES",
      x: 7,
      y: 250
    },
    {
      type: "PVES",
      x: 8,
      y: 50
    },
    {
      type: "PVES",
      x: 9,
      y: 20
    },
    {
      type: "PVES",
      x: 10,
      y: 5
    },
    {
      type: "PVES",
      x: 11,
      y: 250
    },
    {
      type: "PVES",
      x: 12,
      y: 100
    },
    {
      type: "PVES",
      x: 13,
      y: 5
    },
    {
      type: "PVES",
      x: 14,
      y: 100
    },
    {
      type: "PVES",
      x: 15,
      y: 50
    },
    {
      type: "PVES",
      x: 16,
      y: 20
    },
    {
      type: "PVES",
      x: 17,
      y: 5
    },
    {
      type: "PVES",
      x: 18,
      y: 50
    },
    {
      type: "PVES",
      x: 19,
      y: 100
    },
    {
      type: "PVES",
      x: 20,
      y: 5
    },
    {
      type: "PVES",
      x: 21,
      y: 100
    },
    {
      type: "PVES",
      x: 22,
      y: 50
    },
    {
      type: "PVES",
      x: 23,
      y: 20
    },
    {
      type: "PVES",
      x: 24,
      y: 5
    },
    {
      type: "PVES",
      x: 25,
      y: 50
    },
    {
      type: "PVES",
      x: 26,
      y: 100
    },
    {
      type: "PVES",
      x: 27,
      y: 5
    },
    {
      type: "PVES",
      x: 28,
      y: 100
    },
    {
      type: "PVES",
      x: 29,
      y: 0
    },
    {
      type: "PVES",
      x: 30,
      y: 20
    },
    {
      type: "PVES",
      x: 31,
      y: 125
    },
    {
      type: "PVES",
      x: 32,
      y: 50
    },
    {
      type: "PVES",
      x: 33,
      y: 100
    },
    {
      type: "PVES",
      x: 34,
      y: 5
    },
    {
      type: "PVES",
      x: 35,
      y: 100
    },
    {
      type: "PVES",
      x: 36,
      y: 50
    },
    {
      type: "PVES",
      x: 37,
      y: 20
    },
    {
      type: "PVES",
      x: 38,
      y: 5
    },
    {
      type: "PVES",
      x: 39,
      y: 50
    },
    {
      type: "PVES",
      x: 40,
      y: 100
    },
    {
      type: "PVES",
      x: 41,
      y: 5
    },
    {
      type: "PVES",
      x: 42,
      y: 100
    },
    {
      type: "PVES",
      x: 43,
      y: 50
    },
    {
      type: "PVES",
      x: 44,
      y: 20
    },
    {
      type: "PVES",
      x: 45,
      y: 5
    },
    {
      type: "PVES",
      x: 46,
      y: 50
    },
    {
      type: "PVES",
      x: 47,
      y: 100
    },
    {
      type: "PVES",
      x: 48,
      y: 5
    },
    {
      type: "PVES",
      x: 49,
      y: 100
    },
    {
      type: "PVES",
      x: 50,
      y: 50
    },
    {
      type: "PVES",
      x: 51,
      y: 20
    },
    {
      type: "PVES",
      x: 52,
      y: 5
    },
    {
      type: "PVES",
      x: 53,
      y: 50
    },
    {
      type: "PVES",
      x: 54,
      y: 100
    },
    {
      type: "PVES",
      x: 55,
      y: 5
    },
    {
      type: "PVES",
      x: 56,
      y: 100
    },
    {
      type: "PVES",
      x: 57,
      y: 5
    },
    {
      type: "PVES",
      x: 58,
      y: 100
    },
    {
      type: "PVES",
      x: 59,
      y: 100
    },
    {
      type: "PVES",
      x: 60,
      y: 100
    }
  ];

  const valueMarkers = [
    {
      type: {
        color: "black",
        name: "SP"
      },
      x: 5
    },
    {
      type: {
        color: "green",
        name: "SR"
      },
      x: 20
    }
  ];

  const columns: GridColDef[] = [
    {
      field: "type",
      sortable: false,
      headerAlign: "left",
      align: "left",
      disableColumnMenu: true,
      headerName: "MARKER NAME",
      width: 220,
      flex: 1,
      renderCell: (params) => {
        return (
          <Tooltip2 title={params.row.type}>
            <span>{params.row.type}</span>
          </Tooltip2>
        );
      }
    },
    {
      field: "time",
      sortable: false,
      headerAlign: "left",
      align: "left",
      disableColumnMenu: true,
      headerName: "TIME",
      width: 200,
      flex: 1
    },
    {
      field: "pves",
      sortable: false,
      headerAlign: "left",
      align: "left",
      disableColumnMenu: true,
      headerName: "Pves cmH20",
      width: 200,
      flex: 1
    }
  ];

  let PVES = pves;

  const markers = () => {
    return valueMarkers.map((event) => ({
      type: event.type.name,
      x: event.x,
      pves: PVES.find((item) => item.x === event.x)?.y.toFixed(2),
      time: new Date(event.x * 1000).toISOString().substr(11, 8),
      color: event.type.color
    }));
  };

  function pvesStartAndStopPump(startPump: any, stopPump: any) {
    if (!startPump || !stopPump) return (PVES = []);

    const pvesPump = PVES.filter((r) => !!r.x && r.x >= 1 && r.x <= 500);

    return pvesPump;
  }

  const seletedMarker = markers().filter((_) => _.type === selectionModel[0]);

  const selectedMarkerX = markers().filter(
    (_) => _.type === selectionModel[0]
  )[0]?.x;

  const increaseMarker = () => {
    if (!x) return;

    setSaveDisable(false);

    const increase = x + 1;

    if (increase === seletedMarker[0].x) {
      setSaveDisable(true);
    } else {
      setSaveDisable(false);
    }

    if (seletedMarker[0].type === "SR") {
      return setX(increase);
    }

    return x;
  };

  const decreaseMarker = () => {
    if (!x) return;

    setSaveDisable(false);

    const decrease = x - 1;

    if (decrease === seletedMarker[0].x) {
      setSaveDisable(true);
    } else {
      setSaveDisable(false);
    }

    if (seletedMarker[0].type === "SR") {
      return setX(decrease);
    }

    return x;
  };

  const updatedMarker = seletedMarker.map((_: any) => ({
    pves: pvesStartAndStopPump(10, 500)
      .filter((r: any) => r.x === x)[0]
      ?.y.toFixed(2),
    time: new Date(x * 1000).toLocaleTimeString("pt-PT", {
      timeZone: "UTC"
    }),
    type: _.type,
    x: x,
    color: "red",
    width: 2.5,
    strokeDasharray: "8 8",
    updateMarkerName: markerName
  }));

  const finalMarkers = markers().map((_: any) => ({
    type: _.type,
    x: updatedMarker.filter((uM: any) => uM.type === _.type)[0]?.x || _.x,
    pves:
      updatedMarker.filter((uM: any) => uM.type === _.type)[0]?.pves || _.pves,
    time:
      updatedMarker.filter((uM: any) => uM.type === _.type)[0]?.time || _.time,
    color:
      updatedMarker.filter((uM: any) => uM.type === _.type)[0]?.color ||
      _.color,
    width: updatedMarker.filter((uM: any) => uM.type === _.type)[0]?.width || 1,
    strokeDasharray:
      updatedMarker.filter((uM: any) => uM.type === _.type)[0]
        ?.strokeDasharray || "5 5",
    updateMarkerName:
      updatedMarker.filter((uM: any) => uM.type === _.type)[0]
        ?.updateMarkerName || _.type
  }));

  console.log(finalMarkers);

  const saveMarker = () => {
    window.alert(`Marker ${selectionModel} guardado com sucesso!`);
  };

  const finalExamEvents = finalMarkers.map((_: any) => ({
    type: {
      name: _.type,
      color: _.color,
      width: _.width,
      strokeDasharray: _.strokeDasharray,
      updateMarkerNmae: _.updateMarkerName
    },
    x: _.x
  }));

  const updateXWidthTextField = (e: any) => {
    if (!e.target.value) return setX(0);
    setX(parseInt(e.target.value, 8));
  };

  const updateMarkerNameWidthTextField = (e: any) => {
    if (!e.target.value) return setMarkerName("");
    setMarkerName(e.target.value);
  };

  useEffect(() => {
    setX(selectedMarkerX);
  }, [selectedMarkerX]);

  return (
    <Box
      style={{
        marginTop: 50
      }}
    >
      <Box
        style={{
          maxHeight: 200,
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column-reverse"
        }}
      >
        <ResponsiveContainer height={300}>
          <LineChart data={PVES}>
            <YAxis
              type="number"
              tickCount={2}
              tick={{
                fill: "red"
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={16}
              ticks={[0, 100, "dataMax"]}
            />
            <XAxis
              dataKey="x"
              interval="preserveStartEnd"
              hide
              domain={["auto", "auto"]}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="blue"
              activeDot={{ r: 5 }}
              dot={false}
              name={"Value"}
            />
            <Tooltip />
            <Brush dataKey="x" height={20} stroke={"red"} />
            {finalExamEvents.map((_, index) => {
              return (
                <ReferenceLine
                  key={index}
                  x={_.x}
                  stroke={_.type.color}
                  label={{
                    value: _.type.updateMarkerNmae,
                    fill: _.type.color,
                    fontSize: 12,
                    fontWeight: "bold",
                    position: "insideTopRight"
                  }}
                  strokeWidth={_.type.width}
                  strokeDasharray={_.type.strokeDasharray}
                />
              );
            })}
            <ReferenceArea
              x1={30}
              x2={50}
              y1={0}
              y2={250}
              strokeOpacity={0.3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Grid
        style={{
          marginTop: 50
        }}
      >
        <Paper>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Grid item xs={4} style={{ paddingLeft: 16 }}>
                <Typography variant="h6">Markers</Typography>
              </Grid>
              <Grid item xs={8} style={{ padding: 16 }}>
                <Box display="flex" justifyContent="flex-end">
                  <Box>
                    <TextField
                      label="Name"
                      variant="outlined"
                      disabled={disabled}
                      onChange={(e) => updateMarkerNameWidthTextField(e)}
                    />
                  </Box>
                  <Box>
                    <TextField
                      label="x"
                      variant="outlined"
                      disabled={disabled}
                      onChange={(e) => updateXWidthTextField(e)}
                    />
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => decreaseMarker()}
                      disabled={disabled}
                    >
                      Decrease
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => increaseMarker()}
                      disabled={disabled}
                    >
                      Increase
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => saveMarker()}
                      disabled={saveDisabled}
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Box>
            <Box>
              <DataGrid
                className={hiddeCheckBox.root}
                getRowId={(row: any) => row.type}
                rows={finalMarkers || []}
                columns={columns}
                pageSize={10}
                autoHeight
                hideFooter
                checkboxSelection
                selectionModel={selectionModel}
                onSelectionModelChange={(selection: any) => {
                  if (selection.length > 1) {
                    const selectionSet = new Set(selectionModel);
                    const result = selection.filter(
                      (s: any) => !selectionSet.has(s)
                    );

                    setSelectionModel(result);

                    return;
                  }

                  if (selection.length !== 0) {
                    setDisable(false);
                  } else {
                    setDisable(true);
                  }

                  if (selection.length === 0) {
                    setSaveDisable(true);
                  }

                  if (selection[0] === "SP") {
                    setDisable(true);
                    setSaveDisable(true);
                    window.alert(`Só o Marker SR é que pode ser movido!`);
                  }

                  return setSelectionModel(selection);
                }}
              />
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}
