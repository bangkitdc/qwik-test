import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="bg-white shadow-md rounded p-4">
        <div class="mb-2 pb-2 border-b-2 border-gray-100">
          <Slot name="title"/>
        </div>
        <div class="my-2">
          <Slot name="content"/>
        </div>
        <div class="mt-6 text-center">
          <Slot name="footer"/>
        </div>
      </div>
      {/* <div class="blogs" key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0, 50)}...</p>
        <Link href={"/blog/" + blog.id}>Read More</Link>
      </div> */}
    </>
  );
});