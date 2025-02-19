const STALE_SECONDS = 60

export const queryConfig = {
  defaultOptions: {
    queries: {
      staleTime: STALE_SECONDS * 1000,
    },
  },
} as const
