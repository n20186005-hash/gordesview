import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site has no ISR or data cache dependencies, so no remote cache binding is needed.
export default defineCloudflareConfig();
