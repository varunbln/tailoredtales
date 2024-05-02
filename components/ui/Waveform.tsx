import { useEffect } from "react";

export default function Waveform() {
  useEffect(() => {
    async function getLoader() {
      const { waveform } = await import("ldrs");
      waveform.register();
    }
    getLoader();
  }, []);
  return <l-waveform color="lime" size={20}></l-waveform>;
}
