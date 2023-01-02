import axios from "axios";
import { IData, IChangeSaveProps } from "../interfaces/dataItems";

export default async function ChangeSaveApi({ action, id, save }: IChangeSaveProps) {
    const { data } = await axios.patch<IData>("https://exuberant-ruby-fedora.cyclic.app", { action, id, save });
    return data;
}