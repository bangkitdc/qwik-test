import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface BlogData {
  id: string;
  title: string;
  content: string;
}

export const useBlogsData = routeLoader$<BlogData>(async ({ params, redirect }) => {
  const res = await fetch("http://localhost:3000/blogs/" + params.id);

  if (!res.ok) {
    throw redirect(302, '/');
  }

  const data = await res.json();

  return data as BlogData;
});

export default component$(() => {
  const blogsData = useBlogsData();

  return (
    <>
      <div class="blog">
        <h3>{blogsData.value.title}</h3>
        <p>{blogsData.value.content}</p>
      </div>
    </>
  );
});