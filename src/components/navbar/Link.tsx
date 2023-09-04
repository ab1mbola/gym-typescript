import AnchorLink from "react-anchor-link-smooth-scroll";
import "./link.scss";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const className = `link ${selectedPage === lowerCasePage ? "selected" : ""}`;

  return (
    <AnchorLink
      // className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''}
      // transition duration-500 hover:text-primary-300
      // `}
      // className='link'
      className={className}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
