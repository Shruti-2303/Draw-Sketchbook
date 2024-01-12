"use client";
import Board from "@/components/Board";
import LoadingScreen from "@/components/LoadingScreen";
import Menu from "@/components/Menu";
import ToolBox from "@/components/ToolBox";
import { appStore } from "@/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Provider store={appStore}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Menu />
          <ToolBox />
          <Board />
        </>
      )}
    </Provider>
  );
}
