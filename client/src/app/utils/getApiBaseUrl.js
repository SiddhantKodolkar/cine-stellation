// getApiBaseUrl.js

export default function getApiBaseUrl() {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";
  }
  