import { LoginIcon } from "@heroicons/react/outline";
import Thumbnail from "./Thumbnail";
const Results = ({ results }) => {
  return <div className='my-4 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((result) => {
       return <Thumbnail key={result.id} result={result}/>
  })}</div>;
};

export default Results;
