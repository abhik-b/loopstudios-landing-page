import React from "react";
import { useScreenWidth } from "../hooks/ScreenWidth";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  const tablet = useScreenWidth({ width: 768 });

  return tablet ? <DesktopMenu /> : <MobileMenu />;
}
