import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from './contact.css?inline';

export default component$(() => {
  useStylesScoped$(ContactStyles);

  const formVisibile = useSignal(false);
  const formState = useStore({ name: "", message: "" });

  return (
    <>
      <article class="container">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ullam
          rerum esse autem blanditiis magni quisquam ut eos cumque neque.
        </p>

        <button onClick$={() => (formVisibile.value = !formVisibile.value)}>
          Contact Me
        </button>

        {formVisibile.value && (
          <form
            preventdefault:submit
            onSubmit$={() => {
              console.log(formState);
              formState.name = "";
              formState.message = "";
            }}
          >
            <label>
              <span>Your name: </span>
              <input
                value={formState.name}
                type="text"
                onInput$={(e) =>
                  (formState.name = (e.target as HTMLInputElement).value)
                }
              />
            </label>
            <label>
              <span>Your message: </span>
              <textarea
                value={formState.message}
                onInput$={(e) =>
                  (formState.message = (e.target as HTMLTextAreaElement).value)
                }
              ></textarea>
            </label>

            <button>Send</button>

            <p>{formState.name}</p>
            <p>{formState.message}</p>
          </form>
        )}
      </article>
    </>
  );
});