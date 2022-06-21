import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, settIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      settIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      settIsLoading(false);
    }
  };
  return [fetchPosts, isLoading, error];
};
