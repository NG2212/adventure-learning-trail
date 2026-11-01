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
export function PreviewVideo({ url, title }: { url?: string | undefined; title: string }) {
  if (!url) return null;
  const embed = embedUrl(url);
  return (
    <figure className="w-full shrink-0 lg:w-80">
      <div className="aspect-video overflow-hidden rounded-lg bg-stone">
        {embed ? <iframe src={embed} title={`${title} preview`} className="size-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" /> : <video src={url} controls preload="metadata" className="size-full" aria-label={`${title} preview`} />}
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">A short preview</figcaption>
    </figure>
  );
}
