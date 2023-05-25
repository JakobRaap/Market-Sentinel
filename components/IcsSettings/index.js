export default function IcsSettings() {
  return (
    <>
      <h3>Advance warning for calendar files</h3>

      <input
        type="number"
        min="1"
        max="60"
        value="30"
        onChange={(e) => {
          changeSettings("advanceWarningA", e.target.value);
        }}
      ></input>
      <input type="number " min="1" max="60" value="30"></input>
    </>
  );
}
