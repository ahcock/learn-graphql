import React from "react";

interface LinkProps {
  key: string;
  link: {
    id: string;
    description: string;
    url: string;
  };
}

const Link: React.FC<LinkProps> = (props) => {
  const { link } = props;

  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};

export default Link;
