# Release Management

This project uses automated changelog generation and version bumping with [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version).

## Setup

The following tools are configured:

- **commit-and-tag-version**: Automatically bumps version and generates changelog
- **commitlint**: Validates conventional commit messages (PR-only)
- **husky v9**: Git hooks for pre-commit linting
- **GitHub Actions**: Enforces conventional commits on PRs

## Conventional Commits (PR-Only)

Conventional commits are **only enforced on Pull Requests**, not on individual commits during development. This allows developers to make quick commits while ensuring clean release history.

### When Conventional Commits Are Required

- ✅ **Pull Request titles** should follow conventional commit format
- ✅ **At least one commit in the PR** should follow conventional commit format
- ❌ **Individual commits during development** can be any format

### Conventional Commit Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples

```bash
feat: add new ringtone player component
fix: resolve audio playback issue on mobile
docs: update installation guide
chore: update dependencies
```

## Release Commands

```bash
npm run release
```

This will:

- Analyze commits since last release
- Determine version bump (patch/minor/major)
- Update `package.json` version
- Generate/update `CHANGELOG.md`
- Create a git tag
- Commit changes

## Workflow

### For Developers

1. **Make regular commits** during development:
   ```bash
   git add .
   git commit -m "work in progress"
   git commit -m "fix typo"
   git commit -m "add feature"
   ```

2. **Create PR with conventional commit format**:
   ```bash
   git push origin feature-branch
   # Create PR with title: "feat: add new feature"
   ```

3. **GitHub Actions will validate** that the PR follows conventional commits

### For Releases

1. **Merge PRs** (preferably with squash merge)
2. **Run release** when ready:
   ```bash
   npm run release
   ```
3. **Push changes and tags**:
   ```bash
   git push --follow-tags origin main
   ```

## Configuration

- `.versionrc.json`: commit-and-tag-version configuration
- `commitlint.config.js`: Commit message validation rules (for reference)
- `.husky/pre-commit`: Git hook for pre-commit linting
- `.github/workflows/conventional-commits.yml`: PR validation workflow

## Benefits of This Approach

- ✅ **Developer-friendly**: No commit message restrictions during development
- ✅ **Clean release history**: Only conventional commits in changelog
- ✅ **Automated validation**: GitHub Actions ensures PR quality
- ✅ **Flexible workflow**: Developers can commit freely, PRs get validated
