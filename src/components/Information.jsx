import { Alert } from "@mui/material";

function Information() {
  return (
    <Alert icon={false} severity="info" sx={{ marginBottom: "2%" }}>
      {"ℹ️ Tokens, Please! is a single-line code analyzer based on the first three stages of the compilation process. " +
        "This program only accounts for declarations and assignment operations. Here is the list of recognized data types; " +
        "String, int, char, boolean, double, and float. ✨"}
    </Alert>
  );
}

export default Information;
