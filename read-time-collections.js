const wordsPerMinute = 250;

// Select the blog post container element
const blogPostContainer = document.querySelector('[sb-attribute="blog-post"]');

// Calculate the word count of the text content within the blog post container
const textContent = blogPostContainer.textContent.replace(/\s+/g, ' ').trim();
const words = textContent.split(' ').length;

// Calculate the estimated read time in minutes
const totalMinutes = Math.ceil(words / wordsPerMinute);

// Select the read time display element
const readTimeDisplay = document.querySelector('[sb-attribute="read-time-display"]');

// Display the estimated read time
if (totalMinutes < 1) {
  readTimeDisplay.textContent = 'Under 1 min';
} else if (totalMinutes === 1) {
  readTimeDisplay.textContent = '1 min read';
} else {
  readTimeDisplay.textContent = `${totalMinutes} min read`;
}
