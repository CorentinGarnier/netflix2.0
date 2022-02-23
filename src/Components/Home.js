import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

import Input from "./Input";
import VerticalList from "./VerticalList";

function getUrl(value) {
  return value.length > 0
    ? `${process.env.REACT_APP_API_URL}/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
    : `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function Home() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("movie") || "");
  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
      setSearchParams(event.target.value ? { movie: event.target.value } : {});
    },
    [setSearchParams]
  );

  const { data, isLoading, isFetching, error } = useQuery("movies", () => 
   fetch(getUrl(value)).then((response) => response.json())
  );

  return (
    <div className="">
      <Input value={value} onChange={onChange} />
      {error && <div className="">{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <VerticalList className="list-container" data={data?.results} />
      )}
    </div>
  );
}

export default Home;