export interface info {
  img: string;
  text: string[];
  contacts: contacts[];
}

export interface contacts {
  img: string;
  details: string[];
}

export interface socialMedia {
  img: string;
  path: string;
}

export interface serviceLink {
  path: string;
  name: string;
}

export interface serviceMoreInfo {
  main: string;
  title: string;
  details: string;
  img: string;
  subheading: string;
  subtitle: string;
  features: feature[];
  qualities: string[];
}

export interface feature {
  img: string;
  title: string;
  details: string;
}
