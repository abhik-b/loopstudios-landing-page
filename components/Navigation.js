import React from "react";
import { useScreenWidth } from "../hooks/ScreenWidth";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  const tablet = useScreenWidth({ width: 768 });

  return tablet ? <p>desktop</p> : <MobileMenu />;
}
