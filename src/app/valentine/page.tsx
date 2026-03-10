"use client";

import { useState } from "react";
import "./valentine.css";

export default function Valentine() {
  const [step, setStep] = useState<number>(0);
  const [noClickCount, setNoClickCount] = useState<number>(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 50, left: 70 });
  const floatingHeartIcons = ["💕", "💖", "💗", "💘"];
  const floatingPhotoSourceUrls = [
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690098/IMG_4542_ptxl3b.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690096/IMG_6978_cxhdb3.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690096/IMG_0235_nm1kxv.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690095/IMG_0038_tdg5q7.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690095/IMG_2251_qt4fbk.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690095/IMG_2967_jqz6ge.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_0202_jvh56i.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_1780_vfhsle.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_1768_rimivb.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690094/IMG_0021_tkxo6p.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690093/IMG_0911_u4lk2t.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690093/IMG_1210_hzzm0u.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690093/IMG_0880_d26ew7.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690092/IMG_0516_yykhfg.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690092/IMG_0582_gkp1wd.jpg",
    "https://res.cloudinary.com/ddyvrjaqp/image/upload/v1770690091/72015401014__369B9AA7-C783-4CCF-9733-B2928C2ABF48_ft51nm.jpg",
  ];

  const createCloudinaryUrl = (publicId: string, transformation: string) =>
    `https://res.cloudinary.com/ddyvrjaqp/image/upload/${transformation}/${publicId}.jpg`;

  const floatingPhotoUrls = floatingPhotoSourceUrls.map((url) =>
    url.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto,fl_immutable_cache,w_220,h_220,c_fill/"
    )
  );

  const image2024Url = createCloudinaryUrl(
    "v1770672785/IMG_9756_d8ijcd",
    "f_auto,q_auto,fl_immutable_cache,w_960,c_limit"
  );
  const image2025Url = createCloudinaryUrl(
    "v1770672785/IMG_2341_qiwoih",
    "f_auto,q_auto,fl_immutable_cache,w_960,c_limit"
  );

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, year: string) => {
    console.error(`Failed to load ${year} image:`, e.currentTarget.src);
  };

  const handleNo = () => {
    if (noClickCount === 0) {
      // First "no" - show sad face and restart
      setNoClickCount(1);
      setStep(4); // Go to sad face step
      setTimeout(() => {
        setStep(0); // Loop back to beginning
        setNoClickCount(1); // Keep count at 1 for second attempt
        setNoButtonPosition({ top: 50, left: 70 }); // Reset button position to initial
      }, 2000);
    }
    // On second attempt (noClickCount === 1), button will move, handled by mouse events
  };

  const handleYes = () => {
    setStep(5); // Go to poem step
  };

  const handleNoButtonHover = () => {
    if (noClickCount === 1) {
      // Make button move to random position
      const newTop = Math.random() * 80 + 10; // 10-90% of container height
      const newLeft = Math.random() * 80 + 10; // 10-90% of container width
      setNoButtonPosition({ top: newTop, left: newLeft });
    }
  };

  return (
    <div className="valentine-container">
      {step === 0 && (
        <div className="valentine-step fade-in">
          <img
            src={image2024Url}
            alt="2024 Valentine"
            className="valentine-image"
            onError={(e) => handleImageError(e, "2024")}
          />
          <h2 className="valentine-text">You have been my 2024 valentine...</h2>
          <button className="valentine-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="valentine-step fade-in">
          <img
            src={image2025Url}
            alt="2025 Valentine"
            className="valentine-image"
            onError={(e) => handleImageError(e, "2025")}
          />
          <h2 className="valentine-text">You have been my 2025 valentine...</h2>
          <button className="valentine-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="valentine-step fade-in">
          <h2 className="valentine-text">I must ask...</h2>
          <button className="valentine-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="valentine-step fade-in">
          <h1 className="valentine-question">Will you be my 2026 valentine?</h1>
          <div className="valentine-buttons">
            <button className="valentine-btn-choice btn-yes" onClick={handleYes}>
              Yes! 💕
            </button>
            {noClickCount === 0 ? (
              <button className="valentine-btn-choice btn-no" onClick={handleNo}>
                No
              </button>
            ) : (
              <>
                <button
                  className="valentine-btn-choice btn-no no-placeholder"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  No
                </button>
                <button
                  className="valentine-btn-choice btn-no moving-button"
                  style={{
                    position: "absolute",
                    top: `${noButtonPosition.top}%`,
                    left: `${noButtonPosition.left}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={handleNoButtonHover}
                  onClick={handleNoButtonHover}
                >
                  No
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="valentine-step fade-in">
          <div className="sad-face">😢</div>
          <h2 className="valentine-text">Let's try that again...</h2>
        </div>
      )}

      {step === 5 && (
        <>
          <div className="floating-photos-layer" aria-hidden="true">
            {floatingPhotoUrls.map((url, index) => (
              <img
                key={url}
                src={url}
                alt=""
                className="floating-photo"
                loading="lazy"
                decoding="async"
                style={
                  {
                    "--start-left": `${4 + ((index * 37) % 92)}%`,
                    "--duration": `${11 + ((index * 53) % 15) + (((index * 29) % 10) / 10)}s`,
                    "--delay": `${-1 * ((index * 47) % 38)}s`,
                    "--size": `${64 + ((index * 19) % 58)}px`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <div className="floating-hearts-layer" aria-hidden="true">
            {Array.from({ length: 26 }).map((_, index) => (
              <span
                key={`heart-${index}`}
                className="floating-heart"
                style={
                  {
                    "--heart-left": `${2 + ((index * 41) % 96)}%`,
                    "--heart-duration": `${7 + ((index * 31) % 11) + (((index * 17) % 10) / 10)}s`,
                    "--heart-delay": `${-1 * ((index * 29) % 22)}s`,
                    "--heart-size": `${14 + ((index * 13) % 18)}px`,
                  } as React.CSSProperties
                }
              >
                {floatingHeartIcons[index % floatingHeartIcons.length]}
              </span>
            ))}
          </div>

          <div className="valentine-step fade-in poem-container">
            <h1 className="valentine-success">Yes! 🎉💖</h1>
            <div className="valentine-poem" style={{ textAlign: "left" }}>
              <p>Dear Joy,</p>
              <p>You are the love of my life, and with every day I am more grateful that you are by my side. This third valentine's day to be celebrated together, caps a long list of third times with you. Third birthdays together, third new years together (lunar and solar), and not too far in the distant future, though not all that close, a third anniversary together. I know you have been waiting for this valentine invitation, and I hope it was worth it.</p>
              <p>I hope we can enjoy ourselves here: <a href="https://calendar.app.google/8DYHniAeSXVrXmkD8" target="_blank" rel="noopener noreferrer">click for a surprise!</a></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
