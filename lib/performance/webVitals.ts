import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
  type Metric,
} from "web-vitals";

type WebVitalsReporter = (metric: Metric) => void;

let hasRegistered = false;

function logMetric(metric: Metric) {
  const payload = {
    name: metric.name,
    value: Math.round(metric.value * 1000) / 1000,
    delta: Math.round(metric.delta * 1000) / 1000,
    id: metric.id,
    rating: metric.rating,
    navigationType: metric.navigationType,
  };

  if (process.env.NODE_ENV !== "production") {
    // Keep local performance feedback visible during development.
    console.debug("[Web Vitals]", payload);
  }
}

export function startWebVitalsReporting(
  report: WebVitalsReporter = () => {},
) {
  if (hasRegistered) return;
  hasRegistered = true;

  const reporter: WebVitalsReporter = (metric) => {
    if (process.env.NODE_ENV !== "production") {
      logMetric(metric);
    }

    report(metric);
  };

  onCLS(reporter);
  onINP(reporter);
  onLCP(reporter);
  onFCP(reporter);
  onTTFB(reporter);
}
