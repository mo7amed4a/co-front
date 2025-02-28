import React from "react";
import BlogCard from "../blog/blog";
import { Blog } from "@/types/types";

export default function BlogsSection({ blogs }: { blogs: Blog[] }) {
  return (
    <section>
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="my-4 px-4 text-4xl font-bold text-primary">
          Recent Blog posts
        </h2>
        <div className="mx-auto grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs &&
            blogs.map((blog) => <BlogCard key={blog.documentId} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}
