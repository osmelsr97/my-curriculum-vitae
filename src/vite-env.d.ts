/// <reference types="vite/client" />

export interface Items {
    id: string;
    title?: string;
    icon?: string;
    value?: number | string;
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

  interface ICvDataWithLang {
    en: ICvData;
    es: ICvData;
    pr: ICvData;
  }