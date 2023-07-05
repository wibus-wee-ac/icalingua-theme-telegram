export interface IMessageUser {
  id: string;
  name: string;
}

export type IMessageUserList = IMessageUser[];

export interface OpenGraphData {
  ogTitle: string;
  OgType: string;
  ogDescription: string;
  ogImage: {
    url: string;
    width: string;
    height: string;
    type: string;
  }[];
  ogUrl: string;
  requestUrl: string;
  success: boolean;
  charset: string;
}