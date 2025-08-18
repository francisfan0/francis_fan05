import { useState } from "react";
import "./ResumeSearch.css";
import { resumeData, ResumeItem } from "../data/resumeData";

const ResumeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<ResumeItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ResumeItem | null>(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setSearchResults([]);
      setSelectedItem(null);
      return;
    }

    const results = resumeData.filter(
      (item) =>
        item.keyword.toLowerCase().includes(term.toLowerCase()) ||
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.skills.some((skill) =>
          skill.toLowerCase().includes(term.toLowerCase())
        )
    );
    setSearchResults(results);
    setSelectedItem(results.length > 0 ? results[0] : null);
  };

  const handleItemSelect = (item: ResumeItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="resume-search-container">
      <div className="search-header">
        <h1>Resume Search</h1>
        <p>
          Search through your resume content and recruiter preparation notes
        </p>
      </div>

      <div className="search-interface">
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
                    {item.skills.slice(0, 3).map((skill, index) => (
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
                <p>
                  Try searching for different keywords or check your spelling.
                </p>
              </div>
            ) : (
              <div className="search-prompt">
                <p>Start typing to search through your resume content...</p>
                <div className="example-searches">
                  <p>Try searching for:</p>
                  <ul>
                    <li>
                      Machine learning algorithms (SVM, Random Forest, etc.)
                    </li>
                    <li>Programming languages (Python, JavaScript, etc.)</li>
                    <li>Frameworks and tools (React, TensorFlow, etc.)</li>
                    <li>Project names or technologies</li>
                  </ul>
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
                <h3>Recruiter Call Preparation</h3>
                <div className="recruiter-notes">
                  {selectedItem.recruiterNotes
                    .split("\n")
                    .map((note, index) => (
                      <p key={index} className="note-item">
                        {note}
                      </p>
                    ))}
                </div>
              </div>

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
      </div>
    </div>
  );
};

export default ResumeSearch;
