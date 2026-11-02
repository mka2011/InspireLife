import Image from "next/image";
import Link from "next/link";
import type { ArticleBlock, InlineContent } from "@/types/article";

function InlineText({ content }: { content: readonly InlineContent[] }) {
  return content.map((part, index) => {
    if (part.type === "link") {
      return <Link key={index} href={part.href}>{part.text}</Link>;
    }
    let text: React.ReactNode = part.text;
    if (part.italic) text = <em>{text}</em>;
    if (part.bold) text = <strong>{text}</strong>;
    return <span key={index}>{text}</span>;
  });
}

export function ArticleContent({ blocks }: { blocks: readonly ArticleBlock[] }) {
  return (
    <div className="reading-prose mx-auto max-w-[700px]">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph": return <p key={index}><InlineText content={block.content} /></p>;
          case "heading": return block.level === 2 ? <h2 key={index}>{block.text}</h2> : <h3 key={index}>{block.text}</h3>;
          case "list": {
            const items = block.items.map((text, itemIndex) => <li key={itemIndex}>{text}</li>);
            return block.ordered ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;
          }
          case "quote": return <blockquote key={index}><p>{block.text}</p></blockquote>;
          case "image": return (
            <figure key={index}>
              <Image src={block.image.src} alt={block.image.alt} width={block.image.width} height={block.image.height} sizes="(min-width: 768px) 700px, 100vw" className="h-auto w-full" />
              <figcaption>{block.caption}</figcaption>
            </figure>
          );
        }
      })}
    </div>
  );
}
