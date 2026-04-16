import React from "react";

/**
 * Splits a string on "ArmorGalv®" and renders it with proper mixed casing
 * and a superscript ®, overriding any parent text-transform: uppercase.
 * Wrapped in an inline span so it behaves as a single node in flex containers.
 */
export function brandText(text: string): React.ReactNode {
  const parts = text.split(/(ArmorGalv[®\u00AE])/gi);
  if (parts.length === 1) return text;
  return (
    <span style={{ display: "inline" }}>
      {parts.map((part, i) =>
        /^ArmorGalv[®\u00AE]$/i.test(part) ? (
          <span key={i} style={{ textTransform: "none" }}>
            ArmorGalv<sup style={{ fontSize: "0.55em", verticalAlign: "super", lineHeight: 0 }}>®</sup>
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
