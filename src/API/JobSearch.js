// src/api/remotiveApi.js
import axios from "axios";

const REMOTIVE_BASE = "https://remotive.com/api";

export async function fetchRemoteJobs(limit = 20) {
  const { data } = await axios.get(`${REMOTIVE_BASE}/remote-jobs`, {
    params: { limit },
  });
  console.log("RAW fetchRemoteJobs payload:", data);
  // data.jobs is the array we want:
  return data.jobs;
}
