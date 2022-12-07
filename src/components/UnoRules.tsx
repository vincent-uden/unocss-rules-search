import { useState } from "react";
import { Searcher } from "fast-fuzzy";

interface Props {
    rules: string[]
}

const UnoRules = ({rules}: Props) => {

  const [query, setQuery] = useState<string>("");
  const [matches, setMatches] = useState<string[]>(rules);

  const fuzzyS = new Searcher(rules, {threshold: 0.75});

  const handleTextInput = (value: string) =>  {
    setQuery(value);
    setMatches(fuzzyS.search(value));
  }

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Quick Search..."
        value={query}
        onChange={(e) => handleTextInput(e.target.value)}
        className="bg-#0005 text-white font-bread outline-none px-4 py-2 mb-4 rounded-lg"
      />
      <div className="bg-#0005 p-8 rounded-lg overflow-y-scroll scrollbar scrollbar-rounded grow scrollbar-track-color-#0001 scrollbar-thumb-color-#0003 scrollbar-w-3">
        {matches.map((r, i) => {
          return <p className="font-bread text-white " key={`rule-${i}`}>{r}</p>;
        })}
      </div>
    </>
  );
};

export default UnoRules;
