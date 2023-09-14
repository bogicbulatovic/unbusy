type Fetch = typeof window.fetch;

const _fetch: Fetch = async (...params) => {
  const response = await window.fetch(...params);
  if (!response.ok) {
    throw new Error("Network response was not OK");
  }

  return response;
};

export { _fetch };
