/// <reference types="vite/client" />
export interface Items {
    id: string;
    title?: string;
    icon?: string;
    value?: number;
  }
 export  interface ISection {
    id: string;
    title: string;
    items: Items[];
  }
  export interface ICvData {
    name: string;
    lastName: string;
    profession: string;
    profileImage: string;
    sections: ISection[];
    aboutMe: string;
  }