import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { useRef, useEffect, useState } from "react";
import "./Photography.css";
import "../index.css";

type TrackName =
  | "Seattle"
  | "Mt. Rainier"
  | "North Cascades"
  | "Whale Watching"; // Define more tracks as needed

const Photography = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const [percentage, setPercentage] = useState<number>(0);
  const startPosition = useRef<number>(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const trackNames: TrackName[] = [
    "Seattle",
    "Mt. Rainier",
    "North Cascades",
    "Whale Watching",
  ]; // List all track names here

  const cld = new Cloudinary({ cloud: { cloudName: "ddyvrjaqp" } });

  const imageTracks: Record<TrackName, string[]> = {
    Seattle: [
      "seattle/cu9vrmtfnb3bv1b3lsgg",
      "seattle/jzemq60uziapnrar1mrr",
      "seattle/af0asgfokfvn6tu3yowq",
      "seattle/k8nhlmk7kam3iid6nakd",
      "seattle/vt8xifjq1hvctfxbsyqf",
      "seattle/dtvcaw0nybpemlvmgfxc",
      "seattle/gcwyuwjtrdhilka6gysy",
      "seattle/sth5kfawakgdijrjm40g",
      "seattle/anmxplebbbryeaytbzkm",
      "seattle/acupyulbnmvsmk9t91sw",
    ],
    "Mt. Rainier": [
      "mtr/k64nztyzieey5brqleba",
      "mtr/cvk2knslazknfm3cs0qd",
      "mtr/lz2qybnrv2klt8de3au7",
      "mtr/d49m3vr2alpw78zzuuak",
      "mtr/gv7cs6pzpalrb6uiic9m",
      "mtr/pvbfe3chasgovfzstlhf",
      "mtr/mmskoxaias3cnsdfjmsg",
      "mtr/xnnu0uksebzb0luzz9us",
      "mtr/lfu6abgagazvgc4rrsre",
      "mtr/lhhbskdcn3yrg06w5l6n",
      "mtr/bavo20p6kw2ckyrqqs9s",
      "mtr/rcfayj6h8rhrymdyt84n",
      "mtr/plnq4hxujooxnamauxsu",
      "mtr/p2yni62x6rpb4fbxgewt",
      "mtr/v17qgr0nmh8ei2sasoxy",
      "mtr/rr8nw3o0slajrtflbah9",
      "mtr/ptrq1kis6bqaowcizgya",
    ],
    "North Cascades": [
      "nc/mtcxm1z2au3eovedtoux",
      "nc/b0pmxvwrwyptrukaxprs",
      "nc/vd4hekjpb7efsj7jb1xq",
      "nc/v7jcgzbn9cymqluqs6x5",
      "nc/qjmemtcdhdpla59cpoct",
      "nc/ef1oh35gflpndzkjvifd",
      "nc/qlohye5myjktgs5bc8ru",
      "nc/tk5e17hsmybb1m5kxuur",
      "nc/sdkozbbbhax5opusqj7i",
    ],
    "Whale Watching": [
      "whale/kbjelcjihdggqhnh2gfq",
      "whale/hu7gi2aym9yygldkcscf",
      "whale/yumwwd7jifh30ai8z4fd",
      "whale/xsthfylakiy9bdotke4h",
      "whale/kwuf79pcrkhbrebxgozn",
      "whale/ska2rtobsgclzxolev1s",
    ],
    // Add more tracks as needed
  };

  const currentTrack = trackNames[currentTrackIndex];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const updateTrackPosition = (newPercentage: number) => {
      setPercentage(newPercentage);

      track.animate(
        {
          transform: `translate(${newPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLElement).animate(
          {
            objectPosition: `${100 + newPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isDragging.current = true;

      if (e.type === "mousedown") {
        startPosition.current = (e as MouseEvent).clientX;
      } else if (e.type === "touchstart") {
        startPosition.current = (e as TouchEvent).touches[0].clientX;
      }
    };

    const handleOnUp = () => {
      isDragging.current = false;
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const clientX =
        e.type === "mousemove"
          ? (e as MouseEvent).clientX
          : (e as TouchEvent).touches[0].clientX;
      const mouseDelta = startPosition.current - clientX;
      const maxDelta = window.innerWidth / 2;

      const movePercentage = (mouseDelta / maxDelta) * -50;
      const newPercentage = Math.max(
        Math.min(percentage + movePercentage, 0),
        -100
      );

      updateTrackPosition(newPercentage);
      startPosition.current = clientX; // Update start position for continuous dragging
    };

    const handleOnScroll = (e: WheelEvent) => {
      if (!isDragging.current) {
        e.preventDefault();

        const scrollDelta = e.deltaY * 0.5;
        const newPercentage = Math.max(
          Math.min(percentage + (scrollDelta / window.innerWidth) * -50, 0),
          -100
        );

        updateTrackPosition(newPercentage);
      }
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove);
    window.addEventListener("wheel", handleOnScroll, { passive: false });

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
      window.removeEventListener("wheel", handleOnScroll);
    };
  }, [percentage, currentTrack]);

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setPercentage(0); // Reset percentage when switching tracks
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      Math.min(prevIndex + 1, trackNames.length - 1)
    );
    setPercentage(0); // Reset percentage when switching tracks
  };

  return (
    <div className="overflow-none">
      <h1>{trackNames[currentTrackIndex]}</h1>
      <div className="track-controls">
        <button
          className="up-button btn btn-default"
          onClick={handlePreviousTrack}
          disabled={currentTrackIndex === 0}
        >
          Previous
        </button>
      </div>
      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-percentage="0"
      >
        {imageTracks[currentTrack].map((publicId) => (
          <img
            key={publicId}
            className="image"
            src={cld
              .image(publicId)
              .resize(Resize.scale().width(2400).height(1800))
              .format("auto")
              .quality("auto")
              .toURL()}
            alt="Photography"
            data-bs-toggle="modal"
            data-bs-target="#image"
            onClick={() =>
              setSelectedImage(
                cld
                  .image(publicId)
                  .resize(Resize.scale().width(2400).height(1800))
                  .format("auto")
                  .quality("auto")
                  .toURL()
              )
            }
          />
        ))}
      </div>
      <div
        className="modal fade"
        id="image"
        tabIndex={-1}
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content modal-color">
            <div className="modal-header">
              <h5 className="modal-title" id="imageModalLabel">
                Image
              </h5>
              <button
                type="button"
                className="btn-close btn-close-custom"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedImage && (
                <img src={selectedImage} alt="Selected" className="img-fluid" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="track-controls">
        <button
          className="btn btn-default down-button"
          onClick={handleNextTrack}
          disabled={currentTrackIndex === trackNames.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Photography;

// "seattle/jlvgeqftgdjwvlstn5xp",
// "seattle/b9chezhqpnmyscb3cpw4",
// "seattle/egl5hiuzje2smkv8cmuc",
// "seattle/dcvvwth5c9xykb5a0x1v",
//   "seattle/zvrow33ebgswvivbp98w",
// "seattle/j0k7jtcgbr4vpo4ejblz",
// "seattle/ejccurveicir05oohvhz",
// "seattle/nyyatyr0gl5k4hr3pvv7",
// "seattle/mm8fuk2iioz0u7e4sif1",
// "seattle/na9q3qiphyjkgblppdal",
