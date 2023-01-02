import axios from "axios";
import { IData, IChangeRatingProps } from "../interfaces/dataItems";

export default async function changeRatingApi({ action, id, title }: IChangeRatingProps) {
            const {data} = await axios.patch<IData>("https://exuberant-ruby-fedora.cyclic.app", { action, id, rating: title,  })
            return data;
      
}