import React, { ReactElement, useEffect, useState } from "react";

const Route: React.FC<{ path: string; children: ReactElement }> = ({
  path,
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.href);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.href);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath.includes(path) ? children : null;
};

export default Route;
