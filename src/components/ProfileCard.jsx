import { useState, useEffect, useRef } from "react";
import "./ProfileCard.css";

const profile = {
  name: "Ernest Okpako",
  title: "Frontend Developer",
  bio: "I build interfaces and care about how they feel to use. Most of my time goes into getting the small things right — spacing, focus states, text that actually reads well.",
  avatarUrl: "/avatar.png",
  socials: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/amazinernest",
      testId: "test-user-social-github",
      icon: (
        <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
      ),
    },
    {
      key: "twitter",
      label: "Twitter / X",
      href: "https://twitter.com/amazinernest",
      testId: "test-user-social-twitter",
      icon: (
        <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/ernest-okpako",
      testId: "test-user-social-linkedin",
      icon: (
        <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
  hobbies: [
    "Mechanical keyboards",
    "Cycling before the city wakes up",
    "Thrifting for old tech",
    "Making pour-over coffee badly",
    "Tinkering with side projects",
  ],
  dislikes: [
    "Auto-playing videos with sound",
    "Sign-up walls before you see anything",
    "Tabs vs spaces debates",
    "Three-hour standups",
    "Lorem ipsum in production",
  ],
};

export default function ProfileCard() {
  const [now, setNow] = useState(() => Date.now());
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <main className="page-wrapper">
      <article className="profile-card" data-testid="test-profile-card">
        <header className="card-header">
          <figure className="avatar-figure">
            <img
              src={profile.avatarUrl}
              alt="Ernest Okpako, Frontend Developer"
              className="avatar-img"
              data-testid="test-user-avatar"
              width={88}
              height={88}
            />
          </figure>

          <div className="identity">
            <h1 className="user-name" data-testid="test-user-name">
              {profile.name}
            </h1>
            <p className="user-title">{profile.title}</p>
            <p className="user-time-label">
              epoch{" "}
              <span
                className="user-time"
                data-testid="test-user-time"
                aria-live="polite"
                aria-atomic="true"
                aria-label={`Current time: ${now} milliseconds`}
              >
                {now}<span className="time-unit">ms</span>
              </span>
            </p>
          </div>
        </header>

        <p className="user-bio" data-testid="test-user-bio">
          {profile.bio}
        </p>

        <hr className="divider" />

        <nav
          aria-label="Social profiles"
          data-testid="test-user-social-links"
          className="social-links"
        >
          <ul role="list" className="social-list">
            {profile.socials.map(({ key, label, href, testId, icon }) => (
              <li key={key}>
                <a
                  href={href}
                  className="social-link"
                  data-testid={testId}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in new tab)`}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="divider" />

        <div className="lists-grid">
          <section aria-labelledby="hobbies-heading">
            <h2 id="hobbies-heading" className="list-heading">Into</h2>
            <ul className="interest-list" data-testid="test-user-hobbies" role="list">
              {profile.hobbies.map((item) => (
                <li key={item} className="interest-item">
                  <span className="dot dot--green" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="dislikes-heading">
            <h2 id="dislikes-heading" className="list-heading">Not into</h2>
            <ul className="interest-list" data-testid="test-user-dislikes" role="list">
              {profile.dislikes.map((item) => (
                <li key={item} className="interest-item">
                  <span className="dot dot--red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
