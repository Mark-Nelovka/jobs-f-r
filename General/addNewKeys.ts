import { IDataItems } from "../interfaces/dataItems";

export default function addNewKeys(result: IDataItems[]) {
  const addNewKeys = result.map((item: IDataItems) => {
    return { ...item, save: item.saved === true ? true : false, rating: item.rating === "0" ? "0" : item.rating };
  });
      
  return addNewKeys;
}