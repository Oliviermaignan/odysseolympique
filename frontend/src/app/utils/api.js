export const fetchArticles = async () => {
    const res = await fetch('http://localhost:5000/api/articles/');
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    return await res.json();
  };

  export const fetchOneArticle = async (id, category) => {
    const res = await fetch(`http://localhost:5000/api/articles/${category}/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch one article');
    }
    return await res.json();
  };