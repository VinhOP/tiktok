import AccountItem from "../AccountItem";
import { memo } from "react";
function RenderSearchResult({ searchResult }) {
  return (
    <>
      {searchResult.map((result) => {
        return <AccountItem data={result} key={result.id} />;
      })}
    </>
  );
}

export default memo(RenderSearchResult);
