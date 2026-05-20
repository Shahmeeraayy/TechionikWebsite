import { spawn } from "node:child_process";

const isWindows = process.platform === "win32";
const command = isWindows ? "cmd.exe" : "npm";
const args = isWindows
  ? ["/d", "/s", "/c", "npm run build -- --webpack"]
  : ["run", "build", "--", "--webpack"];

const child = spawn(command, args, {
  stdio: "inherit",
  env: {
    ...process.env,
    ANALYZE: "true",
  },
});

child.on("close", (code) => {
  process.exit(code ?? 1);
});
