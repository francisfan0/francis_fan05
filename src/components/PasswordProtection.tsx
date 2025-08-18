import { useState, useEffect } from "react";
import "./PasswordProtection.css";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Check for existing session on component mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/verify-session");
        if (response.ok) {
          const data = await response.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Session check failed:", error);
      }
    };

    checkSession();
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError(data.error || "Authentication failed");
        setPassword("");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Remove logout function since we don't persist sessions anymore

  if (isAuthenticated) {
    return <div className="password-protected-content">{children}</div>;
  }

  return (
    <div className="password-protection-container">
      <div className="password-form-container">
        <div className="password-form-header">
          <h2>Access Required</h2>
        </div>

        <form onSubmit={handlePasswordSubmit} className="password-form">
          <div className="password-input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
              disabled={isLoading}
              autoFocus
            />
          </div>

          {error && <div className="password-error">{error}</div>}

          {isLoading && (
            <div className="password-loading">Authenticating...</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection;
