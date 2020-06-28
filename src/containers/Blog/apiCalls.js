const BASE_URL = `https://www.googleapis.com/blogger/v3/blogs/`;

export const fetchBlogs = async () => {
  const response = await fetch(`${BASE_URL}3231432302879533005/posts?key=AIzaSyBrNkxxjca3RRnMl2_26BvZmGMasE8wEKU`)
  const data = response.json();
  return data;
}
