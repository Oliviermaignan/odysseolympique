export const fetchArticles = async () => {
    const res = await fetch('http://localhost:5000/api/articles/');
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    return await res.json();
  };