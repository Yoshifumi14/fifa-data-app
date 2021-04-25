import React from 'react'
import { CssBaseline , ThemeProvider} from "@material-ui/core";
import { muiTheme} from "../src/MuiTheme"

// muiThemeでラップ
export const decorators = [(Story) => <ThemeProvider theme={muiTheme}><CssBaseline /><Story/></ThemeProvider>];
