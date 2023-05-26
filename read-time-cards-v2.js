<script>
const wordsPerMinute = 250;

// Select the blog card container elements
const cards = document.querySelectorAll('[sb-attribute="blog-card"]');

// Loop through each blog card
for (const card of cards) {
  // Select the blog post home element within the card
  const blogPostHome = card.querySelector('[sb-attribute="blog-post-home"]');

  // Calculate the word count of the text content within the blog post container
  const words = blogPostHome.textContent.trim().split(' ').length;

  // Calculate the estimated read time in minutes
  const totalMinutes = Math.ceil(words / wordsPerMinute);

  // Select the read time display element
  const readTimeDisplay = card.querySelector('[sb-attribute="read-time-display"]');

  // Display the estimated read time
  if (totalMinutes < 1) {
    readTimeDisplay.textContent = 'Under 1 min';
  } else if (totalMinutes === 1) {
    readTimeDisplay.textContent = '1 min read';
  } else {
    readTimeDisplay.textContent = `${totalMinutes} min read`;
  }
}
</script>