export enum LinkTypeEnum {
  INTERNAL = "INTERNAL",
  EXTERNAL = "EXTERNAL",
}

export interface ILink {
  value: string;
  type: LinkTypeEnum;
}
