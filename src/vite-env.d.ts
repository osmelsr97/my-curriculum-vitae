/// <reference types="vite/client" />

import { IconsByName } from "./components/icons";

export interface Items {
    id: string;
    title: string;
    icon?: keyof typeof IconsByName;
    value?: number | string;
    link?: string;
  }
 export interface ISection {
    id: string;
    title: string;
    items: Items[];
  }

  interface ContentSection {
    id: string;
    title: string;
    items: BodyItems[];
  }
  
  interface BodyItems {
    id: string;
    date?: string;
    title?: string;
    description: string;
  }
  export interface ICvData {
    name: string;
    lastName: string;
    profession: string;
    profileImage: string;
    sections: ISection[];
    contentSections: ContentSection[]
  }

  interface ICvDataWithLang {
    en: ICvData;
    es: ICvData;
    pr: ICvData;
  }