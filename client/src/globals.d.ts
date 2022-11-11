interface _theme {
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    header_caption: string;
    text: string;
  };
  colors: {
    background_light: string;
    background_dark: string;
    text_light: string;
    text_mid: string;
    text_dark: string;
    primary: string;
    secondary: string;
    tertiary?: string;
  };
}

interface _hero {
  headline: string;
  text: string;
}

interface _about {
  title: string;
  text1: string;
  text2: string;
}

interface _contact {
  email: string;
  phone: string;
  twitter: string;
  discord: string;
  address_en: string;
  address_jp: string;
}

export { _theme, _hero, _about, _contact };
