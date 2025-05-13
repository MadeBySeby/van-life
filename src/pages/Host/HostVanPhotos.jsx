import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const van = useOutletContext();
  console.log(van);
  return <img src={van.imageUrl} className="host-van-detail-image" />;
}
