export default function Blog() {
    const blogPosts = [
      {
        title: "How to Stay Healthy During the Winter",
        description: "Learn how to maintain your health with simple tips for staying fit during the colder months.",
        link: "Winter",
        date: "February 7, 2025",
      },
      {
        title: "Top 5 Benefits of Regular Health Checkups",
        description: "Regular health checkups can help you stay on top of your health and prevent future medical issues.",
        link: "Five",
        date: "February 7, 2025",
      },
      {
        title: "Understanding Your Health Insurance Benefits",
        description: "A simple guide to understanding your health insurance policy and how to make the most of it.",
        link: "Insurance",
        date: "February 7, 2025",
      },
      {
        title: "The Importance of Mental Health in Healthcare",
        description: "Mental health is just as important as physical health. Here's why mental well-being matters.",
        link: "Mental_health",
        date: "February 7, 2025",
      },
    ]
  
    return (
      <section className="py-12 md:py-16 bg-gray-50" id="blog-articles">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Blog & Articles</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-center">
            Stay informed with the latest health and wellness articles, tips, and news.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{post.description}</p>
                </div>
                <div>
                  <a href={post.link} className="text-blue-500 hover:text-blue-600 font-semibold text-sm md:text-base">
                    Read More →
                  </a>
                  <p className="text-xs md:text-sm text-gray-500 mt-4">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }