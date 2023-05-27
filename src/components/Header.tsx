import React, { useState } from "react";
import Link from "./Link";

interface ITabProps {
  tabTitle: string;
  href: string;
  selectedTabIndex: string;
  indexUrl: string
  onClick: (tabIndex: string) => void;
}

const Tab: React.FC<ITabProps> = ({
  tabTitle,
  href,
  selectedTabIndex,
  indexUrl,
  onClick,
}) => {

  let className =
    "p-1 border-black border-t border-r border-l w-40 h-10 rounded-t-lg";

  if (indexUrl === selectedTabIndex) {
    className += " bg-gray-300";
  }


  return (
    // Не очень.
    <Link href={href}>
      <button onClick={() => onClick(indexUrl)} className={className}>
        {tabTitle}
      </button>
    </Link>
  );
};

const hrefUrls: Array<{ title: string; href: string, indexUrl: string}> = [
  {
    title: "Income",
    href: "/navigator?tab=0",
    indexUrl: "0"
  },
  {
    title: "Outcome",
    href: "/navigator?tab=1",
    indexUrl: "1"
  },
  {
    title: "Loans",
    href: "/navigator?tab=2",
    indexUrl: "2"
  },
  {
    title: "Investments",
    href: "/navigator?tab=3",
    indexUrl: "3"
  },
];

const Header: React.FC = () => {
  
  const [selectedTab, setSelectedTab] = useState<string>("0");
  const onClick = (tabIndex: string) => setSelectedTab(tabIndex);

  return (
    <div>
      {hrefUrls.map((url) => {
        return (
          <Tab
            key={url.href}
            tabTitle={url.title}
            href={url.href}
            selectedTabIndex={selectedTab}
            indexUrl = {url.indexUrl}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default Header;
