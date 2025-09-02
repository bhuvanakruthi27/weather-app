import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function UnitSwitch({ unit, setUnit }) {
  const handleChange = (event, newUnit) => {
    if (newUnit !== null) {
      setUnit(newUnit);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <ToggleButtonGroup
        value={unit}
        exclusive
        onChange={handleChange}
        size="small"
      >
        <ToggleButton value="metric">°C</ToggleButton>
        <ToggleButton value="imperial">°F</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
