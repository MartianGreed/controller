import { ReactNode } from "react";
import { PostHogContext, PostHogWrapper } from "@/context/posthog";

const defaultMockPosthog = new PostHogWrapper("test-key", {
  host: "test-host",
  autocapture: false,
});

export function withPostHog(
  children: ReactNode,
  posthog: PostHogWrapper = defaultMockPosthog,
) {
  return (
    <PostHogContext.Provider value={{ posthog }}>
      {children}
    </PostHogContext.Provider>
  );
}
