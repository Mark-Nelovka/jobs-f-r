import axios from "axios";
import { IData, IChangeSaveProps } from "../interfaces/dataItems";

export default async function ChangeSaveApi({ action, id, save }: IChangeSaveProps) {
    const { data } = await axios.patch<IData>("https://jobs-back.onrender.com", { action, id, save });
    return data;
}