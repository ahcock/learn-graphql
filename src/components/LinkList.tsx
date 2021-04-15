import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList: React.FC = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data.feed.links.map((eachLink: any) => (
        <Link key={eachLink.id} link={eachLink} />
      ))}
    </div>
  );
};

export default LinkList;
