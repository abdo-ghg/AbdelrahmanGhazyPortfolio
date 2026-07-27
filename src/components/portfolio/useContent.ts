import { useEffect, useState } from "react";
import {
  CONTENT_UPDATED_EVENT,
  DEFAULT_CONTENT,
  readStoredContent,
  type PortfolioContent,
} from "./content";

/**
 * Returns the site content. Renders defaults during SSR/hydration, then swaps
 * in any content saved from the /admin editor.
 */
export function useContent(): PortfolioContent {
  const [content, setContent] = useState<PortfolioContent>(DEFAULT_CONTENT);

  useEffect(() => {
    const sync = () => setContent(readStoredContent() ?? DEFAULT_CONTENT);
    sync();
    window.addEventListener(CONTENT_UPDATED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CONTENT_UPDATED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return content;
}
