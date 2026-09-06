"use client";

import { useRef, useEffect, useState } from "react";
import "./Photography.css";
import "../index.css";

type TrackName =
  | "Seattle"
  | "Mt. Rainier"
  | "North Cascades"
  | "Whale Watching"
  | "Arches"
  | "Grand Canyon"
  | "Grand Teton"
  | "Yellowstone"; // Define more tracks as needed

const Photography = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const percentageRef = useRef<number>(-20);
  const startPosition = useRef<number>(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lightbox zoom / pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const lbPanStart = useRef<{ mx: number; my: number; px: number; py: number } | null>(null);
  const lbHasPanned = useRef(false);

  const trackNames: TrackName[] = [
    "Seattle",
    "Mt. Rainier",
    "North Cascades",
    "Whale Watching",
    "Arches",
    "Grand Canyon",
    "Grand Teton",
    "Yellowstone",
  ]; // List all track names here

  // Helper function to create deterministic Cloudinary URLs
  const createCloudinaryUrl = (
    publicId: string,
    width: number,
    height: number,
  ) => {
    return `https://res.cloudinary.com/ddyvrjaqp/image/upload/c_scale,h_${height},w_${width}/f_auto/q_auto/${publicId}`;
  };

  const imageTracks: Record<TrackName, string[]> = {
    Seattle: [
      "seattle/cu9vrmtfnb3bv1b3lsgg",
      "seattle/jzemq60uziapnrar1mrr",
      "seattle/af0asgfokfvn6tu3yowq",
      "seattle/k8nhlmk7kam3iid6nakd",
      "seattle/vt8xifjq1hvctfxbsyqf",
      // "seattle/dtvcaw0nybpemlvmgfxc",
      "seattle/gcwyuwjtrdhilka6gysy",
      "seattle/sth5kfawakgdijrjm40g",
      // "seattle/anmxplebbbryeaytbzkm",
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
    Arches: [
      "arches/kevgarjwdwjwikdzfcc3",
      "arches/dzqxgdtzwdqmjxw0zkg2",
      "arches/wpqxo2z5zhlo5lsmmwgc",
      "arches/xmnanznzkdpdmkzkk0pd",
      "arches/wd78h51lpueev3peo4lk",
      "arches/jzoywhmdojzch31f8nn3",
      "arches/iixl4iimiupggq8tys6u",
      "arches/rnyduinoflog8pkllgf3",
      "arches/kjrqnterivsmh6xcwsuo",
      "arches/chvb41w9paxnvadec8ui",
      "arches/fvjckwzxa7wjxadjsh79",
      "arches/cxjuwrzlojfbxw6exoiq",
      "arches/efmblkte9901fb8rfv7d",
    ],
    "Grand Canyon": [
      "gc/vj3vghxai8u3mypclqjx",
      "gc/yhlltvuqm65nhagivpyb",
      "gc/thhehd0xqakzycx591mi",
      "gc/ecf4dknqrdkfy6ytulpd",
      "gc/fkvbyr0v4gu5ctevzqro",
      "gc/udm0t9fuvd4c1bxorah4",
      "gc/lcy937ujtlwoxkl1plca",
      "gc/jxyohjpfwxzrsuh0pyau",
      "gc/onfu9op2xpysjjw2yfki",
      "gc/phh6ug4hctxlioog3cez",
      "gc/xq4oib6qoytwxjt7uptt",
    ],
    "Grand Teton": [
      "gt/lzrvjddlsbcqfuz19fnn",
      "gt/x72zu2ajlomxwvrk6jpx",
      "gt/wwffr7mup4dsl9crpmo4",
      "gt/gjzfbk0kr5naysyb7slq",
      "gt/vqssqil3ceeqxsy5d9z8",
      "gt/oa74r1vw5lk459zvui2g",
      "gt/cqyhlhxznezh1s4texfj",
      "gt/ebana5pq9kfltahcgkuo",
    ],
    Yellowstone: [
      "ys/i7xt4yb3ebm6kyssk86x",
      "ys/futkpsketvp7oeewg7jj",
      "ys/bhiqwhlszv8spnhzpf8v",
      "ys/b3ssk6ml6owqhspeu7rh",
      "ys/kn04xljygic9levvi9zf",
      "ys/sloowsguleotjcykd9mt",
      "ys/uwgtufizu3ziy7kgr58c",
      "ys/afb5xrw8uxetmgulf5yc",
      "ys/ce9troaifzl9hbxseq7c",
    ],
    // Add more tracks as needed
  };

  const currentTrack = trackNames[currentTrackIndex];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const clamp = (value: number, min: number, max: number) =>
      Math.max(Math.min(value, max), min);

    // Compute scroll bounds so the first/last image stays at a visible edge margin.
    const getBounds = () => {
      const trackWidth = track.scrollWidth;
      const vw = window.innerWidth;
      const edgePx = Math.min(vw * 0.06, 72);
      const maxPct = ((edgePx - vw / 2) / trackWidth) * 100;
      const minPct = ((vw / 2 - edgePx - trackWidth) / trackWidth) * 100;
      return { minPct, maxPct };
    };

    const updateTrackPosition = (newPercentage: number) => {
      const { minPct, maxPct } = getBounds();
      const clamped = clamp(newPercentage, minPct, maxPct);
      percentageRef.current = clamped;

      track.animate(
        {
          transform: `translate(${clamped}%, -50%)`,
        },
        { duration: 300, fill: "forwards" },
      );

      for (const image of track.getElementsByClassName("image")) {
        (image as HTMLElement).animate(
          {
            objectPosition: `${100 + clamped}% center`,
          },
          { duration: 300, fill: "forwards" },
        );
      }
    };

    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      // Only prevent default for touch to avoid blocking click events on mouse.
      if (e.type === "touchstart") e.preventDefault();
      isDragging.current = true;
      hasDragged.current = false;

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

      const delta = Math.abs(startPosition.current - clientX);
      if (delta > 6) hasDragged.current = true;

      const mouseDelta = startPosition.current - clientX;
      const maxDelta = window.innerWidth / 2;

      const movePercentage = (mouseDelta / maxDelta) * -50;
      const newPercentage = percentageRef.current + movePercentage;

      updateTrackPosition(newPercentage);
      startPosition.current = clientX;
    };

    const handleOnScroll = (e: WheelEvent) => {
      if (!isDragging.current) {
        e.preventDefault();

        // Scroll down should move left (more negative); up should move right
        const newPercentage =
          percentageRef.current - (e.deltaY / window.innerWidth) * 100;

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

    // Start at the beginning of the album (first image at the left edge margin).
    const { maxPct: startPct } = getBounds();
    percentageRef.current = startPct;
    updateTrackPosition(startPct);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
      window.removeEventListener("wheel", handleOnScroll);
    };
  }, [currentTrack]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    lbPanStart.current = null;
  };

  const openLightbox = (url: string) => {
    if (hasDragged.current) return;
    setSelectedImage(url);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setLightboxOpen(true);
  };

  const handleLbWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    const step = e.deltaY < 0 ? 0.3 : -0.3;
    setZoom((prev) => {
      const next = Math.max(1, Math.min(6, prev + step));
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleLbImageMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    lbHasPanned.current = false;
    if (zoom > 1) {
      lbPanStart.current = { mx: e.clientX, my: e.clientY, px: pan.x, py: pan.y };
    }
  };

  const handleLbMouseMove = (e: React.MouseEvent) => {
    if (!lbPanStart.current) return;
    const dx = e.clientX - lbPanStart.current.mx;
    const dy = e.clientY - lbPanStart.current.my;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) lbHasPanned.current = true;
    setPan({ x: lbPanStart.current.px + dx, y: lbPanStart.current.py + dy });
  };

  const handleLbMouseUp = () => {
    lbPanStart.current = null;
  };

  const handleLbOverlayClick = () => {
    if (!lbHasPanned.current) closeLightbox();
    lbHasPanned.current = false;
  };

  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    percentageRef.current = -20;
  };

  return (
    <div className="overflow-none">
      <div className="photo-header">
        <h1 className="photo-title">{trackNames[currentTrackIndex]}</h1>
      </div>

      <div className="track-fade-left" />
      <div className="track-fade-right" />

      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-percentage="0"
      >
        {imageTracks[currentTrack].map((publicId) => {
          const isPortrait =
            publicId === "seattle/dtvcaw0nybpemlvmgfxc" ||
            publicId === "seattle/anmxplebbbryeaytbzkm";
          const thumbUrl = isPortrait
            ? createCloudinaryUrl(publicId, 800, 1067)
            : createCloudinaryUrl(publicId, 800, 600);
          const fullUrl = isPortrait
            ? createCloudinaryUrl(publicId, 1800, 2400)
            : createCloudinaryUrl(publicId, 2400, 1800);
          return (
            <img
              key={publicId}
              className="image"
              src={thumbUrl}
              alt={`${currentTrack} photograph`}
              loading="lazy"
              onClick={() => openLightbox(fullUrl)}
            />
          );
        })}
      </div>

      {lightboxOpen && selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={handleLbOverlayClick}
          onWheel={handleLbWheel}
          onMouseMove={handleLbMouseMove}
          onMouseUp={handleLbMouseUp}
          onMouseLeave={handleLbMouseUp}
          style={{ cursor: zoom > 1 ? "default" : "zoom-out" }}
        >
          <button
            className="lightbox-close"
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            ×
          </button>
          {zoom > 1 && (
            <span className="lightbox-zoom-level">{zoom.toFixed(1)}×</span>
          )}
          <img
            src={selectedImage}
            alt="Selected"
            className="lightbox-image"
            draggable={false}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              cursor: zoom > 1 ? "grab" : "zoom-in",
              transition: lbPanStart.current ? "none" : "transform 0.18s ease",
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleLbImageMouseDown}
            onDoubleClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
          />
          <span className="lightbox-hint">
            {zoom > 1 ? "drag to pan · double-click to reset" : "scroll to zoom · click outside to close"}
          </span>
        </div>
      )}

      <div className="album-selector">
        <div className="album-selector-meta">
          {imageTracks[currentTrack].length} photos &middot; drag or scroll to
          explore
        </div>
        <div className="album-pills">
          {trackNames.map((name, index) => (
            <button
              key={name}
              className={`album-pill${index === currentTrackIndex ? " active" : ""}`}
              onClick={() => handleSelectTrack(index)}
            >
              {name}
            </button>
          ))}
        </div>
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
