interface ILink {
  value: string;
  external: boolean;
}

interface ISubItem {
  value: string;
  link: ILink;
}

interface IHeaderItem {
  value: string;
  link: ILink;
  subItems: ISubItem[];
}

export interface IHeader {
  items: IHeaderItem[];
}
