import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  
  const sidebarCollapsed = width < 1100;

  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    showFooterMenuText: width > 500,
    showSidebar: width > 768,
    sidebarCollapsed,
    sidebarWidth: sidebarCollapsed ? 50 : 150
  };

  const menuItems = [
    { icon: `😀`, text: "Item 1" },
    { icon: `😉`, text: "Item 2" },
    { icon: `😎`, text: "Item 3" },
    { icon: `🤔`, text: "Item 4" },
    { icon: `😛`, text: "Item 5" }
  ];
  useEffect(() => {
    const handleWindowResize = () => 
    setWidth(window.innerWidth)

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
    <div
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        {styles.showSidebar ? (
          <Sidebar menuItems={menuItems} styles={styles} />
        ) : (
          <TopBar styles={styles} />
        )}

        <Content styles={styles} />

        {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )}
      </div>
  )
}
