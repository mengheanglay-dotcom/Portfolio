import { profile } from "../../data/portfolio.js";
import usePortrait from "../../hooks/usePortrait.js";

export default function Portrait() {
  const { src, inputRef, openFilePicker, handleFileChange } = usePortrait(
    profile.photo,
  );

  return (
    <>
      <button className="me" onClick={openFilePicker} aria-label="Portrait">
        <div className="frame">
          {src ? (
            <img src={src} alt={profile.name} />
          ) : (
            <>
              <svg
                viewBox="0 0 380 560"
                preserveAspectRatio="xMidYMax slice"
                aria-hidden="true"
              >
                <circle cx="190" cy="215" r="82" fill="#0a1228" />
                <path
                  d="M30 560c0-110 70-190 160-190s160 80 160 190z"
                  fill="#0a1228"
                />
                <circle
                  cx="190"
                  cy="215"
                  r="82"
                  fill="none"
                  stroke="#59a0ff"
                  strokeOpacity=".5"
                />
              </svg>
              <span className="tag">Your photo goes here</span>
            </>
          )}
        </div>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </>
  );
}
