import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, Link } from "@builder.io/qwik-city";
import Card from '~/components/card/card';

interface BlogData {
  id: string,
  title: string,
  content: string
}

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const useBlogsData = routeLoader$<BlogData[]>(async () => {
  const res = await fetch("http://localhost:3000/blogs");
  const data = await res.json();

  return data as BlogData[];
});

export default component$(() => {
  const name = useSignal('qwik'); // boolean, int, strings

  const person = useStore({ name: 'bangkit', age: 20 });

  const blogsData = useBlogsData();
  
  return (
    <>
      <div class="container">
        <h2>Hello World!</h2>
        <p>Hello, {name.value}</p>
        <p>
          Hello, {person.name} - {person.age}
        </p>

        <button onClick$={() => (name.value = "haha")}>click me</button>
        <button onClick$={() => (person.name = "apa")}>click me again</button>

        <div class="blogs">
          {blogsData.value.map((blog) => (
            <Card key={blog.id}>
              <h3 class="text-black" q:slot="title">
                {blog.title}
              </h3>
              <p class="text-black" q:slot="content">
                {blog.content.slice(0, 50)}...
              </p>
              <Link
                class="text-black"
                q:slot="footer"
                href={"/blog/" + blog.id}
              >
                <button>Read More</button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Test',
  meta: [
    {
      name: 'description',
      content: 'Trying a new qwik framework',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    }
  ]
};
