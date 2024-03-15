"use client";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { useEffect, useState } from "react";

export function Code({ code }: { code: string }) {
  const [highlightedCode, setHighlightedCode] = useState("");
  useEffect(() => {
    (async () => {
      setHighlightedCode(await highlightCode(code));
    })();
  });
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      //   keepBackground: false,
      grid: false,
      defaultLang: "python",
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
