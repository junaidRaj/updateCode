import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { getData } from "../config/firebaseMethod";

export default function SMselect(props) {
  const { label, datasource,onChange,required,  displayField,
    valueField, nodeName} = props;
    const [dtSource, setDtSource] = useState(datasource);

    let getNodeData = () => {
      if (nodeName) {
        getData(nodeName)
          .then((res) => {
            setDtSource(res);
          })
          .catch((err) => {});
      }
    };
    useEffect(() => {
      getNodeData();
    }, []);

  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        required={required}
        fullWidth = {true}
        variant="standard"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={onChange}
        displayField="displayField"
        valueField="valueField"
      >
        {dtSource && dtSource.length > 0
          ? dtSource.map((x) => (
            <MenuItem value={x[valueField ? valueField : "id"]}>
            {x[displayField ? displayField : "displayname"]}
          </MenuItem>
            ))
          : null}
      </Select>
    </>
  );
}
