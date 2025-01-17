import { useState } from "preact/hooks";
import { getEntriesPerSearch } from "@content/entryData";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    setResults(getEntriesPerSearch(value));
    console.log("result", results);
  };

  return (
    <div class="search">
      <input
        type="text"
        value={query}
        onInput={handleSearch}
        placeholder="Search"
        style={{
          height: "32px",
          padding: "6px",
        }}
      />
      {results.length > 0 && (
        <div
          style={{
            position: "absolute",
            left: "15%",
            right: "15%",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <ul
            style={{
              listStyle: "square",
              fontSize: "0.8em",
            }}
          >
            {results.map((entry) => (
              <li>
                <a href={`/${entry.year}/${entry.month}/${entry.basename}`}>
                  {entry.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
