import { useEffect, useState } from "react";
import { replyApi } from "../api";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export function FetchComment(contentId) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const { page } = useInfiniteScroll();

  async function FetchFirst() {
    setLoading(true);
    try {
      const { data } = await replyApi.getReplies(contentId, 0, 1000);
      setData(data);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  }

  // async function Refetch() {
  //   setLoading(true);
  //   try {
  //     const { data: newData } = await replyApi.getReplies(contentId, page, 10);
  //     const mergeData = data.concat(...newData);
  //     setData(mergeData);
  //   } catch (error) {
  //     console.log(error.response);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    FetchFirst();
  }, []);

  // useEffect(() => {
  //   Refetch();
  // }, [page]);

  return { loading, data };
}
