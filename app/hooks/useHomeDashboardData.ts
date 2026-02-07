import type { HomeScreenData } from "@/app/types/home";
import { useCallback, useEffect, useRef, useState } from "react";
import { MOCK_HOME_DATA } from "../data/mockData";

type Status = "loading" | "ready" | "empty" | "error";

const simulateRequest = () => Promise.resolve(MOCK_HOME_DATA);

export const useHomeDashboardData = () => {
  const [data, setData] = useState<HomeScreenData | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [refreshing, setRefreshing] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const hydrate = useCallback(async () => {
    if (!isMounted.current) {
      return;
    }
    setStatus((prev) => (prev === "ready" ? "ready" : "loading"));
    try {
      const payload = await simulateRequest();
      if (isMounted.current) {
        setData(payload);
        setStatus(payload.holdings.length ? "ready" : "empty");
      }
    } catch (error) {
      if (isMounted.current) {
        setStatus("error");
      }
    }
  }, []);

  const refresh = useCallback(async () => {
    if (!isMounted.current) {
      return;
    }
    setRefreshing(true);
    try {
      const payload = await simulateRequest();
      if (isMounted.current) {
        setData(payload);
        setStatus(payload.holdings.length ? "ready" : "empty");
      }
    } catch (error) {
      if (isMounted.current) {
        setStatus("error");
      }
    } finally {
      if (isMounted.current) {
        setRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return {
    data,
    status,
    refreshing,
    refresh,
  };
};
