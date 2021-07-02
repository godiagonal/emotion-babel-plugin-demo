import { ThemeProvider } from "@emotion/react";
import { Button } from "./Button";

const theme = {
  borderRadius: "3px",
  color: {
    primary: "lightblue",
    secondary: "lightgreen",
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="primary" disabled>
        Primary disabled
      </Button>
      <Button color="secondary" disabled>
        Secondary disabled
      </Button>
    </ThemeProvider>
  );
};
