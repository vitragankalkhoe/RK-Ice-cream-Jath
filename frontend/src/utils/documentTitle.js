import { useEffect } from 'react';

export function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = `${title} | RK Agency JATH`;
  }, [title]);

  return null;
}
