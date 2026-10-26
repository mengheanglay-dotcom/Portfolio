import { useRef, useState } from "react";

export default function usePortrait(initialSrc) {
  const [src, setSrc] = useState(initialSrc);
  const inputRef = useRef(null);

  const openFilePicker = () => inputRef.current?.click();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setSrc(reader.result);
    reader.readAsDataURL(file);
  };

  return { src, inputRef, openFilePicker, handleFileChange };
}
