# Resume Search Feature

This is a password-protected resume search feature that allows you to quickly find information about your skills, projects, and prepare for recruiter calls.

## Features

- 🔒 **Password Protection**: Secure access to your resume content
- 🔍 **Smart Search**: Search by keywords, technology names, or skills
- 📝 **Recruiter Notes**: Quick access to what you need to know for interviews
- 📱 **Responsive Design**: Works on desktop and mobile
- 🌙 **Dark Mode Support**: Matches your website's theme

## How to Use

1. **Set Up Environment Variables**:

   - Copy `env.example` to `.env`
   - Set your password: `RESUME_SEARCH_PASSWORD=your-secure-password`
   - Optionally disable the feature: `VITE_ENABLE_RESUME_SEARCH=false`

2. **Add Your Resume Content**:

   - Open `src/data/resumeData.ts`
   - Add your skills, projects, and technologies following the template
   - Include specific recruiter preparation notes for each item

3. **Access the Feature**:
   - Navigate to `/resume-search` on your website
   - Or click the "🔒 Resume" link in the navigation
   - Enter your password to access the search interface

## Data Structure

Each resume item should follow this structure:

```typescript
{
  id: "unique-id",
  keyword: "search-term", // What you'll search for (e.g., "svm", "react", "python")
  title: "Technology/Concept Name",
  description: "Brief description",
  technicalDetails: "Your specific experience and implementation details",
  recruiterNotes: "What you need to know for recruiter calls - be specific about concepts, challenges, and your role",
  projects: ["Project 1", "Project 2"],
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

## Example Usage

1. **Search for "SVM"** → Get details about Support Vector Machines, your implementation, and recruiter call preparation notes
2. **Search for "React"** → Find your React experience, projects, and interview talking points
3. **Search for "Python"** → Access your Python skills, projects, and technical details

## Customization

### Styling

- Modify `src/pages/ResumeSearch.css` to change the appearance
- Modify `src/components/PasswordProtection.css` to customize the login screen

### Functionality

- Edit `src/pages/ResumeSearch.tsx` to modify search behavior
- Update `src/components/PasswordProtection.tsx` to change authentication logic

### Data Management

- All resume data is stored in `src/data/resumeData.ts`
- You can easily add, remove, or modify entries
- The search is case-insensitive and matches keywords, titles, and skills

## Security Features

### Current Security Measures:

- **Password Protection**: Basic client-side authentication
- **Attempt Limiting**: Lockout after 5 failed attempts for 5 minutes
- **Session Management**: Authentication expires after 2 hours
- **Artificial Delays**: 1-second delay on each login attempt to prevent brute force
- **Hidden Access**: Multiple ways to access the feature

### Access Methods:

1. **Visible Link**: Small dot (·) in navigation (very subtle)
2. **Keyboard Shortcut**: Press `Cmd+Backspace` (Mac) or `Ctrl+Delete` (Windows/Linux) from anywhere on the site
3. **Direct URL**: Navigate to `/resume-search`

### Security Limitations:

- **Client-side only**: Password is in the source code (not production-ready)
- **No server validation**: All authentication happens in the browser
- **Basic obfuscation**: Password is not encrypted, just stored in code

### For Production Use:

- Implement server-side authentication
- Use environment variables for passwords
- Add rate limiting on the server
- Consider using a proper authentication service
- Encrypt sensitive data

### Environment Variables:

- `RESUME_SEARCH_PASSWORD`: Your secure password (required)
- `VITE_ENABLE_RESUME_SEARCH`: Set to "false" to disable the feature entirely

**Note**: The `.env` file is gitignored, so your password won't be committed to the repository.

## Adding New Content

To add a new skill or technology:

1. Open `src/data/resumeData.ts`
2. Add a new object following the template
3. Include:
   - A unique ID
   - Search keywords
   - Your specific experience
   - Recruiter call preparation notes
   - Related projects
   - Associated skills

## Tips for Recruiter Notes

- Be specific about technical concepts you need to explain
- Include your role and contributions
- Mention challenges you faced and how you solved them
- Add metrics or results when possible
- Include follow-up questions you might get asked

Example recruiter notes:

```
"Be ready to explain: 1) How the algorithm works 2) Why you chose this approach 3) Challenges you faced 4) Results achieved 5) What you would do differently"
```
