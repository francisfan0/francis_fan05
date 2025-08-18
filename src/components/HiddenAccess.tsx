import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HiddenAccess = () => {
  const router = useRouter();

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") {
      return;
    }

    // Secret key sequence: Cmd+Backspace (Mac) or Ctrl+Delete (Windows/Linux)
    const secretSequence = ["Meta", "Backspace"];
    const secretSequenceAlt = ["Control", "Delete"];

    // Alternative using event.code
    const secretSequenceCode = ["Meta", "Backspace"];
    const secretSequenceAltCode = ["Control", "Delete"];

    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKeys: string[] = [];

      if (event.ctrlKey) pressedKeys.push("Control");
      if (event.altKey) pressedKeys.push("Alt");
      if (event.shiftKey) pressedKeys.push("Shift");
      if (event.metaKey) pressedKeys.push("Meta");

      // Add the main key - handle special keys properly
      let key = event.key;
      if (key === "Delete" || key === "Backspace") {
        // Keep as is - no self-assignment needed
      } else if (key.length === 1) {
        key = key.toLowerCase();
      }
      pressedKeys.push(key);

      // Also check using event.code as backup
      const pressedKeysCode: string[] = [];
      if (event.ctrlKey) pressedKeysCode.push("Control");
      if (event.altKey) pressedKeysCode.push("Alt");
      if (event.shiftKey) pressedKeysCode.push("Shift");
      if (event.metaKey) pressedKeysCode.push("Meta");
      pressedKeysCode.push(event.code);

      // Check if the sequence matches
      const sequenceString = pressedKeys.join(",");
      const sequenceStringCode = pressedKeysCode.join(",");
      const isSecretSequence =
        sequenceString === secretSequence.join(",") ||
        sequenceString === secretSequenceAlt.join(",") ||
        sequenceStringCode === secretSequenceCode.join(",") ||
        sequenceStringCode === secretSequenceAltCode.join(",");

      if (isSecretSequence) {
        event.preventDefault();
        setTimeout(() => {
          router.push("/resume-search");
        }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  // Don't render anything visible
  return null;
};

export default HiddenAccess;
