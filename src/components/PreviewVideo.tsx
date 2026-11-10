/** Hosted pages become embeds; anything else plays in a native video element. */
export function embedUrl(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  const loom = url.match(/loom\.com\/(?:share|embed)\/([\w-]+)/);
  if (loom) return `https://www.loom.com/embed/${loom[1]}`;
  return null;
}

/** Small 16:9 preview from the optional `video:` frontmatter field. Renders nothing without a URL. */
export function PreviewVideo({ url, title, poster, caption = "A short preview", className = "w-full shrink-0 lg:w-80" }: { url?: string | undefined; title: string; poster?: string; caption?: string | null; className?: string }) {
  if (!url) return null;
  const embed = embedUrl(url);
  return (
    <figure className={className}>
      <div className="aspect-video overflow-hidden rounded-lg bg-stone">
        {embed ? <iframe src={embed} title={`${title} preview`} className="size-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" /> : <video src={url} poster={poster} controls playsInline preload="metadata" className="size-full" aria-label={`${title} preview`} />}
      </div>
      {caption && <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

/** Poster by convention: same path with .jpg in place of the extension. */
export function posterFor(url: string): string {
  return url.replace(/\.[a-z0-9]+(?=$|[?#])/i, ".jpg");
}

/** Full-width 16:9 player used as the main element of "Why this adventure". */
export function FeatureVideo({ url, title }: { url: string; title: string }) {
  const embed = embedUrl(url);
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-stone">
      {embed ? <iframe src={embed} title={`${title} video`} className="size-full" allow="fullscreen; picture-in-picture" allowFullScreen loading="lazy" /> : <video src={url} poster={posterFor(url)} controls playsInline preload="metadata" className="size-full" aria-label={`${title} video`} />}
    </div>
  );
}
