const load = async url => {
  const response = await fetch(url, { method: "GET" });
  const asText = await response.text();
  return Promise.resolve(asText);
};

export default load;
