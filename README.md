# Log-in Page Project

## Starting the App

**Frontend:**

```bash
npm run dev
```

**Backend:**

```bash
cd backend
node server.js
```

**Or run both at once:**

```bash
npm run dev (after setting up concurrently)
```

## Useful Commands

Restart backend with auto-reload:

```bash
cd backend
npx nodemon server.js
```

Install dependencies:

```bash
npm install
```

## Notes

- Backend runs on http://localhost:5000
- Frontend runs on http://localhost:5173
- JWT tokens expire after 1 hour
- Users are stored in backend/data/users.json
