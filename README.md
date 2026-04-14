# Profile Card

A profile card component built with React and Vite. Shows name, bio, avatar, social links, hobbies, dislikes, and a live epoch timestamp.

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```bash
npm run build   # production bundle
npm run preview # preview the build locally
```

## data-testid attributes

| Element | testid |
|---|---|
| Card root | `test-profile-card` |
| Name | `test-user-name` |
| Bio | `test-user-bio` |
| Epoch time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social links wrapper | `test-user-social-links` |
| GitHub link | `test-user-social-github` |
| Twitter link | `test-user-social-twitter` |
| LinkedIn link | `test-user-social-linkedin` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

The epoch time updates every second. If you're writing tests that check the value, use `jest.useFakeTimers()` or `cy.clock()`.

## Structure

```
src/
  components/
    ProfileCard.jsx
    ProfileCard.css
  index.css
  main.jsx
public/
  avatar.png
```

## Notes

- Semantic HTML — `article`, `header`, `figure`, `nav`, `section`
- Keyboard navigation works, focus states are visible
- Mobile-first layout, two-column list grid on wider screens
- No build step needed beyond `npm install && npm run dev`
