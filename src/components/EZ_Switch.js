import Switch from "@mui/material/Switch";

export default function EZ_Switch(props) {
  const { label, onChange, checked } = props;
  return (
    <>
      <Switch checked={checked} label={label} onChange={onChange} />
    </>
  );
}
