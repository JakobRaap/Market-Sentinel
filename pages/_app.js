import useSWR from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: events } = useSWR("/api/fetchThisWeek", fetcher);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events ?? []} />
    </>
  );
}
