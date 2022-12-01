import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Error from "next/error";
import Image from "next/image";
import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../state";
import ChangeSaveApi from "../API/changeSaveApi";
import changeAttributesApi from "../API/changeRatingApi";
import getDateCreatePost from "../General/getDateCreatePost";
import addNewKeys from "../General/addNewKeys";
import Pagination from "../сomponents/pagination";
import Loader from "../сomponents/loader";
import { IDataItems } from "../interfaces/dataItems";
import LocalIcon from "../assets/images/Location-icon.svg";
import SaveIcon from "../assets/images/Save-icon.svg";

export default function Home({
  status,
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [first, setFirst] = useState<number>(0);
  const [last, setLast] = useState<number>(5);
  const [state, setState] = useState("idle");

  const allItems = useGlobalState("allItems");

  useEffect(() => {
    setState("loading");

    if (status === 200 && allItems[0].length === 0) {
      const itemsWithNewKeys = addNewKeys(data);
      const dataWithChangedDate = getDateCreatePost(itemsWithNewKeys);
      setGlobalState("allItems", dataWithChangedDate);
      setState("resolve");
      return;
    }
    if (status !== 200) {
      setState("rejected");
      return;
    }
    setState("resolve");
  }, [data, status, allItems]);

  const addRating = async (event: React.MouseEvent) => {
    const { title } = event.target as HTMLLabelElement;
    const { id } = event.currentTarget as HTMLDivElement;

    const changeRating = allItems[0].map((it) =>
      it._id === id ? { ...it, rating: title } : it
    );
    setGlobalState("allItems", changeRating);

    await changeAttributesApi({
      id,
      title,
      action: "rating",
    });
  };

  const changeSave = async (event: React.MouseEvent) => {
    const { id, dataset } = event.currentTarget as HTMLButtonElement;
    const itemsWithSave = allItems[0].map((it) =>
      it._id === id ? { ...it, saved: !JSON.parse(dataset.saved!) } : it
    );

    setGlobalState("allItems", itemsWithSave);

    await ChangeSaveApi({
      action: "save",
      id,
      save: JSON.parse(dataset.saved!),
    });
  };

  const getItemsForNewPage = (id: number) => {
    const lastIndex = id * 5;
    const firstIndex = lastIndex - 5;
    if (id === data.length) {
      setFirst(firstIndex);
      setLast(lastIndex);
      return;
    }
    if (lastIndex > allItems.length) {
      setFirst(firstIndex);
      setLast(lastIndex);
      return;
    }
    setFirst(firstIndex);
    setLast(lastIndex);
  };

  return (
    <main>
      {state === "loading" && <Loader />}
      <>
        <section className="section">
          {state === "idle" && "waiting"}
          {state === "resolve" && (
            <div className="job-container">
              <ul className="job-list">
                {allItems[0]
                  .slice(first, last)
                  .map(
                    ({
                      _id,
                      pictures,
                      title,
                      name,
                      address,
                      createdAt,
                      saved,
                      rating,
                    }: IDataItems) => {
                      return (
                        <li key={_id} className="job-list__item">
                          <div className="job-list__image-container">
                            <Image
                              src={pictures[0]}
                              alt="img"
                              width={85}
                              height={85}
                            />
                          </div>
                          <div className="job-list__info-container">
                            <div className="star-rating-sm">
                              <div
                                onClick={addRating}
                                id={String(_id)}
                                className="star-rating__wrap"
                              >
                                <input
                                  className="star-rating__input"
                                  type="radio"
                                  name="rating"
                                  value="5"
                                  id={String(_id)}
                                />
                                <label
                                  className={
                                    rating === "5"
                                      ? "star-rating__ico--active"
                                      : "star-rating__ico"
                                  }
                                  htmlFor={String(_id)}
                                  title="5"
                                  id={String(_id)}
                                ></label>
                                <input
                                  className="star-rating__input"
                                  type="radio"
                                  name="rating"
                                  value="4"
                                  id={String(_id)}
                                />

                                <label
                                  className={
                                    rating >= "4"
                                      ? "star-rating__ico--active"
                                      : "star-rating__ico"
                                  }
                                  htmlFor={String(_id)}
                                  title="4"
                                  id={String(_id)}
                                ></label>

                                <input
                                  className="star-rating__input"
                                  id={String(_id)}
                                  type="radio"
                                  name="rating"
                                  value="3"
                                />
                                <label
                                  className={
                                    rating >= "3"
                                      ? "star-rating__ico--active"
                                      : "star-rating__ico"
                                  }
                                  htmlFor={String(_id)}
                                  title="3"
                                  id={String(_id)}
                                ></label>
                                <input
                                  className="star-rating__input"
                                  id={String(_id)}
                                  type="radio"
                                  name="rating"
                                  value="2"
                                />
                                <label
                                  className={
                                    rating >= "2"
                                      ? "star-rating__ico--active"
                                      : "star-rating__ico"
                                  }
                                  htmlFor={String(_id)}
                                  title="2"
                                ></label>
                                <input
                                  className="star-rating__input"
                                  id={String(_id)}
                                  type="radio"
                                  name="rating"
                                  value="1"
                                />
                                <label
                                  className={
                                    rating >= "1"
                                      ? "star-rating__ico--active"
                                      : "star-rating__ico"
                                  }
                                  htmlFor="star-rating-1"
                                  title="1"
                                  id={String(_id)}
                                ></label>
                              </div>
                              <div className="job-list__save-container-sm">
                                <p>{createdAt}</p>
                              </div>
                            </div>
                            <div className="job-list__title-container">
                              <Link href={`/${_id}`}>{title}</Link>
                              <div>
                                <span>{name}</span>
                                <span>{address}</span>
                              </div>
                              <p className="job-list__location-container">
                                <span>
                                  <LocalIcon
                                    width={13}
                                    height={18}
                                    alt="location icon"
                                  />
                                </span>
                                <span>Vienna, Austria</span>
                              </p>
                            </div>
                          </div>
                          <div className="star-rating">
                            <div
                              onClick={addRating}
                              id={String(_id)}
                              className="star-rating__wrap"
                            >
                              <input
                                className="star-rating__input"
                                type="radio"
                                name="rating"
                                value="5"
                                id={String(_id)}
                              />
                              <label
                                className={
                                  rating === "5"
                                    ? "star-rating__ico--active"
                                    : "star-rating__ico"
                                }
                                htmlFor={String(_id)}
                                title="5"
                                id={String(_id)}
                              ></label>
                              <input
                                className="star-rating__input"
                                type="radio"
                                name="rating"
                                value="4"
                                id={String(_id)}
                              />

                              <label
                                className={
                                  rating >= "4"
                                    ? "star-rating__ico--active"
                                    : "star-rating__ico"
                                }
                                htmlFor={String(_id)}
                                title="4"
                                id={String(_id)}
                              ></label>

                              <input
                                className="star-rating__input"
                                id={String(_id)}
                                type="radio"
                                name="rating"
                                value="3"
                              />
                              <label
                                className={
                                  rating >= "3"
                                    ? "star-rating__ico--active"
                                    : "star-rating__ico"
                                }
                                htmlFor={String(_id)}
                                title="3"
                                id={String(_id)}
                              ></label>
                              <input
                                className="star-rating__input"
                                id={String(_id)}
                                type="radio"
                                name="rating"
                                value="2"
                              />
                              <label
                                className={
                                  rating >= "2"
                                    ? "star-rating__ico--active"
                                    : "star-rating__ico"
                                }
                                htmlFor={String(_id)}
                                title="2"
                              ></label>
                              <input
                                className="star-rating__input"
                                id={String(_id)}
                                type="radio"
                                name="rating"
                                value="1"
                              />
                              <label
                                className={
                                  rating >= "1"
                                    ? "star-rating__ico--active"
                                    : "star-rating__ico"
                                }
                                htmlFor="star-rating-1"
                                title="1"
                                id={String(_id)}
                              ></label>
                            </div>
                          </div>
                          <div className="job-list__save-container">
                            <button
                              onClick={changeSave}
                              id={_id}
                              data-saved={saved}
                            >
                              <SaveIcon
                                data-saved={saved}
                                width={16}
                                height={20}
                                alt="Save icon"
                                className={
                                  saved
                                    ? "job-list__save-icon--save"
                                    : "job-list__save-icon"
                                }
                              />
                            </button>
                            <p>{createdAt}</p>
                          </div>
                        </li>
                      );
                    }
                  )}
              </ul>
              <Pagination getItem={(id: number) => getItemsForNewPage(id)} />
            </div>
          )}
        </section>
      </>
      {state === "rejected" && <Error statusCode={status} />}
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jobs-back.onrender.com");
  const { data, status } = await res.json();

  return {
    props: { status, data },
  };
}
