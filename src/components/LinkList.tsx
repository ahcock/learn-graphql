import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList: React.FC = (a) => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        data.feed.links.map((eachLink: any, index: number) => (
          <Link key={eachLink.id} link={eachLink} index={index} />
        ))
      )}
    </div>
  );
};

export default LinkList;
