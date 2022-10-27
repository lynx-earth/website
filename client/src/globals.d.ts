interface _theme {
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSize: {
    header: string;
    text: string;
  };
  colors: {
    background_light: string;
    background_dark: string;
    text_light: string;
    text_dark: string;
    primary: string;
    secondary: string;
    tertiary?: string;
  };
}

interface _landing {
  headline: string;
  text: string;
}

export { _theme, _landing };
