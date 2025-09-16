"use client";
import React from "react";
import useSWR from "swr";
import DOMPurify from "dompurify";

const fetchSvg = async (src, forceColor) => {
  const res = await fetch(src, { cache: "force-cache" });
  if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.status} ${res.statusText}`);

  let text = await res.text();

  text = text.replace(/^\s*<\?xml[\s\S]*?\?>\s*/i, "");
  text = text.replace(/<!--[\s\S]*?-->/g, "");

  if (forceColor) {
    text = text.replace(/fill="[^"]*"/g, 'fill="currentColor"');
    text = text.replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
  };

  return text;
};

const Icon = ({
  src,
  width = 24,
  height = 24,
  alt,
  className,
  style,
  color = "currentColor",
  forceColor = true
}) => {
  const { data: rawSvg, error } = useSWR([src, forceColor], ([url, fc]) => fetchSvg(url, fc), {
    revalidateOnFocus: false
  });

  const svg = React.useMemo(() => {
    if (!rawSvg) return null;

    const sanitized = DOMPurify.sanitize(rawSvg, { USE_PROFILES: { svg: true } });

    return sanitized.replace(
      /<svg([^>]*)>/,
      `<svg$1 preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;">`
    );
  }, [rawSvg]);

  if (error) {
    console.error("SVG load failed:", error);
  };

  const baseStyle = {
    display: "inline-block",
    width,
    height,
    lineHeight: 0,
    color,
    borderRadius: 2,
    ...style
  };

  if (svg) {
    return (
      <span
        className={className}
        style={baseStyle}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : "true"}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  };

  if (!svg && !error) {
    return <span className={className} style={{ ...baseStyle, backgroundColor: "#e0e0e0" }} />;
  };

  return (
    <span
      className={className}
      style={{ ...baseStyle, backgroundColor: "red" }}
      title="Icon load failed"
      aria-hidden="true"
    />
  );
};

export default Icon;
