import { useMemo, useState } from "react";
import "./ResumeSearch.css";
import { resumeData, ResumeItem } from "../data/resumeData";
import BlockBlast from "./BlockBlast";

const fieldsToSearch = (item: ResumeItem) =>
  [
    item.keyword,
    item.title,
    item.description,
    item.technicalDetails,
    item.howItWorks,
    item.inDepth,
    ...item.skills,
  ]
    .join(" ")
    .toLowerCase();

const ResumeSearch = () => {
  const [activeTab, setActiveTab] = useState<"resume" | "blockblast">("resume");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<ResumeItem | null>(null);

  const allIndex = useMemo(
    () =>
      resumeData.map((it) => ({
        item: it,
        blob: fieldsToSearch(it),
      })),
    []
  );

  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    // Simple ranking: items that start-with match in title/keyword bubble up
    const startsWithBoost = (it: ResumeItem) => {
      const ql = q.toLowerCase();
      const t = it.title.toLowerCase();
      const k = it.keyword.toLowerCase();
      return Number(t.startsWith(ql) || k.startsWith(ql));
    };
    return allIndex
      .filter(({ blob }) => blob.includes(q))
      .sort(
        (a, b) =>
          startsWithBoost(b.item) - startsWithBoost(a.item) ||
          a.item.title.localeCompare(b.item.title)
      )
      .map(({ item }) => item);
  }, [allIndex, searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setSelectedItem(null);
      return;
    }
    // Keep previously selected if it’s in results; otherwise select first
    const first = searchResults[0] ?? null;
    if (!first || first.id !== selectedItem?.id) {
      setSelectedItem(first);
    }
  };

  const handleItemSelect = (item: ResumeItem) => setSelectedItem(item);

  return (
    <div className="resume-search-container">
      <div className="search-header">
        <h1>Private Tools</h1>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "resume" ? "active" : ""}`}
            onClick={() => setActiveTab("resume")}
          >
            Resume Search
          </button>
          <button
            className={`tab-button ${activeTab === "blockblast" ? "active" : ""}`}
            onClick={() => setActiveTab("blockblast")}
          >
            Block Blast Solver
          </button>
        </div>
      </div>

      {activeTab === "resume" ? (
        <>
          <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for skills, technologies, or concepts..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="search-results-container">
        <div className="results-list">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <div
                key={item.id}
                className={`result-item ${
                  selectedItem?.id === item.id ? "selected" : ""
                }`}
                onClick={() => handleItemSelect(item)}
              >
                <h3>{item.title}</h3>
                <p className="result-description">{item.description}</p>
                <div className="result-tags">
                  {item.skills.slice(0, 2).map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : searchTerm ? (
            <div className="no-results">
              <p>No results found for "{searchTerm}"</p>
            </div>
          ) : (
            <div className="search-prompt">
              <p>Start typing to search through your resume content...</p>
              <div className="example-searches">
                <p>Try: SVM, Python, React, Diffusion Policy, Redis</p>
              </div>
            </div>
          )}
        </div>

        {selectedItem && (
          <div className="item-details">
            <div className="detail-header">
              <h2>{selectedItem.title}</h2>
              <p className="detail-description">{selectedItem.description}</p>
            </div>

            <div className="detail-section">
              <h3>Technical Details</h3>
              <p>{selectedItem.technicalDetails}</p>
            </div>

            <div className="detail-section">
              <h3>How it works</h3>
              <p>{selectedItem.howItWorks}</p>
            </div>

            <div className="detail-section">
              <h3>In depth</h3>
              <p>{selectedItem.inDepth}</p>
            </div>

            {selectedItem.codeExample?.code && (
              <div className="detail-section">
                <h3>Code example</h3>
                {/* If you use a syntax highlighter, add appropriate className like language-ts */}
                <pre className="code-block">
                  <code>{selectedItem.codeExample.code}</code>
                </pre>
              </div>
            )}

            <div className="detail-section">
              <h3>Related Projects</h3>
              <ul className="projects-list">
                {selectedItem.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3>Skills & Technologies</h3>
              <div className="skills-container">
                {selectedItem.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
        </>
      ) : (
        <BlockBlast />
      )}
    </div>
  );
};

export default ResumeSearch;
