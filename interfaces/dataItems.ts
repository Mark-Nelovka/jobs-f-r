export interface IDataItems {
  _id: string;
  pictures: string[];
  title: string;
  name: string;
  address: string;
  location: {
    lat: number;
    long: number;
  };
  benefits: string[];
  description: string;
  email: string;
  phone: string;
  salary: string;
  createdAt: string,
  saved: boolean,
  rating: string
}

export interface IData {
  data: IDataItems[];
}

export interface IChangeRatingProps {
    id: string,
    title: string,
    action: string
}

export interface IChangeSaveProps {
    id: string,
    save: boolean,
    action: string
}

