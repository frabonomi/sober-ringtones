type SAMetadata = Record<string, string>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare function sa_event(eventName: string, metadata?: SAMetadata): void;
declare const window: Window & { sa_event: typeof sa_event };

export const saEvent = (eventName: string, metadata?: SAMetadata) => {
  if (window && window.sa_event) return window.sa_event(eventName, metadata);
};
