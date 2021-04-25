import { cyan, blueGrey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Muiのカラーセット:https://material-ui.com/customization/color/#color
// ほぼcyanで統一
export const muiTheme = createMuiTheme({
  palette: {
    background: {
      default: blueGrey[50],
    },
    primary: {
      main: cyan[800],
    },
    secondary: {
      main: cyan[600],
    },
    text: {
      primary: blueGrey[800],
      secondary: blueGrey[400],
    },
  },
});
