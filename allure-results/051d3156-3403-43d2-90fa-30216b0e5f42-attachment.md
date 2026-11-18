# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: validationOftags.spec.ts >> two tests >> validation of form filling
- Location: tests\validationOftags.spec.ts:27:9

# Error details

```
Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e7]:
  - heading "Welcome Back" [level=1] [ref=e13]
  - paragraph [ref=e14]: Sign in to access the QA Automation Playground
  - generic [ref=e15]:
    - generic [ref=e16]:
      - generic [ref=e17]: Username
      - textbox "Username" [active] [ref=e19]:
        - /placeholder: Admin
    - generic [ref=e20]:
      - generic [ref=e21]: Password
      - generic [ref=e22]:
        - textbox "Password" [ref=e23]:
          - /placeholder: Hello@123
        - button "Show password" [ref=e24] [cursor=pointer]
    - button "Sign In" [ref=e28] [cursor=pointer]
  - generic [ref=e33]:
    - text: Use
    - code [ref=e34]: Admin
    - text: /
    - code [ref=e35]: Hello@123
    - text: to sign in
```