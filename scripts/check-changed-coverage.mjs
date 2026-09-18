import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const coverageSummaryPath = resolve(projectRoot, 'coverage/finance-manager/coverage-summary.json');

function getComparisonRef() {
  if (process.env.GITHUB_BASE_REF) {
    return `origin/${process.env.GITHUB_BASE_REF}`;
  }

  if (process.env.GITHUB_EVENT_BEFORE && !/^0+$/.test(process.env.GITHUB_EVENT_BEFORE)) {
    return process.env.GITHUB_EVENT_BEFORE;
  }

  return 'HEAD^';
}

function getChangedProductionFiles() {
  const comparisonRef = getComparisonRef();
  const outputs = [
    execFileSync('git', ['diff', '--name-only', `${comparisonRef}...HEAD`], {
      cwd: projectRoot,
      encoding: 'utf8',
    }),
    execFileSync('git', ['diff', '--name-only'], {
      cwd: projectRoot,
      encoding: 'utf8',
    }),
    execFileSync('git', ['diff', '--cached', '--name-only'], {
      cwd: projectRoot,
      encoding: 'utf8',
    }),
  ];

  return [...new Set(outputs.join('\n').split(/\r?\n/))]
    .map((file) => file.trim().replaceAll('\\', '/'))
    .filter(
      (file) =>
        /^src\/app\/.*\.ts$/.test(file) &&
        !file.endsWith('.spec.ts') &&
        file !== 'src/app/app.config.ts',
    );
}

const changedFiles = getChangedProductionFiles();

if (changedFiles.length === 0) {
  console.log('No production TypeScript files changed; coverage check skipped.');
  process.exit(0);
}

const testResult = spawnSync('npx', ['ng', 'test', '--watch=false'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (testResult.status !== 0) {
  process.exit(testResult.status ?? 1);
}

if (!existsSync(coverageSummaryPath)) {
  console.error(`Coverage summary not found: ${coverageSummaryPath}`);
  process.exit(1);
}

const summary = JSON.parse(readFileSync(coverageSummaryPath, 'utf8'));
const failures = [];

for (const file of changedFiles) {
  const coverageEntry = summary[resolve(projectRoot, file)] ?? summary[file];

  if (!coverageEntry) {
    failures.push(`${file}: no coverage data`);
    continue;
  }

  const metrics = ['statements', 'branches', 'functions', 'lines'];
  for (const metric of metrics) {
    const percentage = coverageEntry[metric].pct;
    if (percentage < 70) {
      failures.push(`${file}: ${percentage}% ${metric} covered (minimum: 70%)`);
    }
  }
}

if (failures.length > 0) {
  console.error('\nChanged-file coverage check failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Changed-file coverage check passed for ${changedFiles.length} file(s).`);