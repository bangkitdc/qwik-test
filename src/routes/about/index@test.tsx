import { component$, useSignal, $ } from "@builder.io/qwik";
import styles from './about.module.css';
import Modal from "~/components/modal/modal";

export default component$(() => {

  const modalVisible = useSignal(false);
  const closeModal = $(() => {
    modalVisible.value = !modalVisible.value;
  });

  return (
    <>
      <article class={styles.article}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ullam
          rerum esse autem blanditiis magni quisquam ut eos cumque neque.
        </p>

        <button onClick$={() => (modalVisible.value = true)}>Open Modal</button>

        {modalVisible.value && (
          <Modal size='sm' frosted={true} close={closeModal}>
            <div q:slot="content">
              <h2>Great News</h2>
            </div>

            <div q:slot="footer">
              <h2>HEHE</h2>
            </div>
          </Modal>
        )}
      </article>
    </>
  );
});
