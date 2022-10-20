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
    background: string;
    text: string;
    primary: string;
    secondary: string;
  };
}

interface _landing {
  headline: string;
  text: string;
}

export { _theme, _landing };
