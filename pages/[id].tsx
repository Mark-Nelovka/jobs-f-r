import { useEffect, useState } from "react";
import { InferGetServerSidePropsType } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import Image from "next/image";
import { setGlobalState, useGlobalState } from "../state";
import { IDataItems } from "../interfaces/dataItems";
import ChangeSaveApi from "../API/changeSaveApi";
import getDateCreatePost from "../General/getDateCreatePost";
import Map from "../сomponents/map";
import Loader from "../сomponents/loader";
import SaveIcon from "../assets/images/Save-icon.svg";
import ShareIcon from "../assets/images/Shape-icon.svg";
import ArrowBack from "../assets/images/Arrow-back-icon.svg";

export default function DetailedJob({
  data,
  status,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [item, setItem] = useState<IDataItems[]>([]);
  const [state, setState] = useState("idle");

  const allJobs = useGlobalState("allItems");

  const location = useRouter();
  const { id } = location.query;

  useEffect(() => {
    setState("loading");

    if (data) {
      const changeDate = getDateCreatePost(data);
      setItem(changeDate);
      setState("resolve");
      return;
    }
    setState("rejected");
  }, [data, status, id]);

  const changeSave = async (event: React.MouseEvent) => {
    const { id, dataset } = event.currentTarget as HTMLButtonElement;

    const itemWithChangeSave = item.map((it: IDataItems) => {
      return { ...it, saved: !JSON.parse(dataset.saved!) };
    });
    setItem(itemWithChangeSave);
    if (allJobs[0].length > 0) {
      const findIndx = allJobs[0].findIndex((it) => it._id === id);
      allJobs[0].splice(findIndx, 1, itemWithChangeSave[0]);
      setGlobalState("allItems", allJobs[0]);
    }
    await ChangeSaveApi({
      action: "save",
      id,
      save: JSON.parse(dataset.saved!),
    });
  };

  return (
    <>
      {state === "loading" && <Loader />}
      {state === "resolve" && (
        <section>
          <div className="detailed-section-container">
            {item.length > 0 && (
              <div className="detailed__container">
                <div className="header-container">
                  <h2 className="detailed__header-title">Job Details</h2>
                  <div className="detailed__save-container">
                    <button
                      onClick={changeSave}
                      data-saved={item[0].saved}
                      id={item[0]._id}
                    >
                      <SaveIcon
                        data-saved={item[0].saved}
                        className={
                          item[0].saved
                            ? "job-list__save-icon--save"
                            : "job-list__save-icon"
                        }
                        width="16"
                        height="20"
                        alt="save icon"
                      />
                      <p>Save to my list</p>
                    </button>
                    <button>
                      <ShareIcon width="18" height="20" alt="share icon" />
                      <p>Share</p>
                    </button>
                  </div>
                </div>
                <div className="detailed__additional-separator"></div>
                <div className="detailed__save-container-sm">
                  <button
                    onClick={changeSave}
                    data-saved={item[0].saved}
                    id={item[0]._id}
                  >
                    <SaveIcon
                      data-saved={item[0].saved}
                      className={
                        item[0].saved
                          ? "job-list__save-icon--save"
                          : "job-list__save-icon"
                      }
                      width="16"
                      height="20"
                      alt="save icon"
                    />
                    <p>Save to my list</p>
                  </button>
                  <ShareIcon width="18" height="20" alt="share icon" />
                  <p>Share</p>
                </div>

                <button className="apply-button-sm">Apply now</button>

                {item.length > 0 &&
                  item.map((job: IDataItems) => {
                    return (
                      <div key={job._id}>
                        <div className="detailed__text-title-container-sm">
                          <h2 className="detailed__text-title">{job.title}</h2>
                          <div className="detailed__sub-text-title-sm-container">
                            <p className="detailed__time-posted-sm">
                              {job.createdAt}
                            </p>
                            <div className="detailed__salary-container-sm">
                              <p>Brutto, per year</p>
                              <p>{job.salary}</p>
                            </div>
                          </div>
                        </div>
                        <div className="detailed__text-title-container">
                          <h2 className="detailed__text-title">{job.title}</h2>
                          <div className="detailed__salary-container">
                            <p>{job.salary}</p>
                            <p>Brutto, per year</p>
                          </div>
                        </div>
                        <p className="detailed__time-posted">{job.createdAt}</p>
                        <p className="detailed__info">{job.description}</p>
                        <h2 className="detailed__titles">Responsopilities</h2>
                        <div className="detailed__info">
                          <p>
                            Wellstar Medical Group, a physician-led
                            multi-specialty group in Atlanta, Georgia, is
                            currently recruiting for a BC/BE cardiothoracic
                            surgeon to join their existing cardiovascular
                            program. This is an opportunity to play a key role
                            on a multidisciplinary team of cardiologists and
                            surgeons.
                          </p>
                          <p>
                            The ideal candidate will have five or more years of
                            experience in cardiac surgery. This candidate should
                            be facile with off-pump revascularization, complex
                            aortic surgery, minimally invasive valve and valve
                            repair, transcatheter valve replacement, surgical
                            atrial fibrillation ablation, ventricular assist
                            device placement, and extra corporeal membrane
                            oxygenation.
                          </p>
                          <p>
                            Wellstar is one of the largest integrated healthcare
                            systems in the Southeast with 11 hospitals in
                            Atlanta metro region. With two open heart programs
                            at Kennestone Regional Medical Center and Atlanta
                            Medical Center, Wellstar cardiac surgeons perform
                            over 1200 cardiac procedures per year. The cardiac
                            service line is the only center in Georgia with the
                            Joint Commission’s Comprehensive Cardiac Center
                            certification.
                          </p>
                        </div>
                        <h2 className="detailed__titles">
                          Compensation & Benefits:
                        </h2>
                        <ul>
                          {job.benefits.map((ben) => {
                            return (
                              <li className="detailed__benefits-item" key={ben}>
                                <div className="detailed__benefits-item--before"></div>
                                {ben}
                              </li>
                            );
                          })}
                        </ul>
                        <button className="apply-button">Apply now</button>
                        <div className="detailed__additional-info-container">
                          <h2 className="detailed__titles">Additional info</h2>
                          <div className="detailed__additional-separator"></div>
                          <p className="detailed__employment-title">
                            Employment type
                          </p>
                          <ul className="detailed__employment-list">
                            <li>Full time</li>
                            <li>Part time</li>
                            <li>Temporary</li>
                          </ul>
                          <p className="detailed__benefits-title">Benefits</p>
                          <ul className="detailed__benefits-list">
                            {job.benefits.map((ben) => {
                              return <li key={ben}>{ben}</li>;
                            })}
                          </ul>
                        </div>
                        <h2 className="detailed__titles">Attached images</h2>
                        <div className="detailed__additional-separator"></div>
                        <ul className="detailed__attached-images-list">
                          {job.pictures.map((img, i) => {
                            return (
                              <li key={i}>
                                <Image
                                  src={img}
                                  width="200"
                                  height="300"
                                  alt="Attached images"
                                />
                              </li>
                            );
                          })}
                        </ul>
                        <div className="detailed__additional-info-container-sm">
                          <h2 className="detailed__titles">Additional info</h2>
                          <div className="detailed__additional-separator"></div>
                          <p className="detailed__employment-title">
                            Employment type
                          </p>
                          <ul className="detailed__employment-list">
                            <li>Full time</li>
                            <li>Part time</li>
                            <li>Temporary</li>
                          </ul>
                          <p className="detailed__benefits-title">Benefits</p>
                          <ul className="detailed__benefits-list">
                            {job.benefits.map((ben) => {
                              return <li key={ben}>{ben}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}

                <button
                  onClick={() => location.push("/")}
                  className="detailed__button-back-page"
                >
                  <ArrowBack width="10" height="18" />
                  RETURN TO JOB BOARD
                </button>
              </div>
            )}
            <Map data={item} />
          </div>
        </section>
      )}
      {state === "rejected" && <Error statusCode={status} />}
    </>
  );
}

interface IStaticProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps({ params }: IStaticProps) {
  const { id } = params;
  const res = await fetch(`https://jobs-back.onrender.com/${id}`);
  const { data, status } = await res.json();

  return {
    props: { status, data },
  };
}
