import css from '../Button/Button.module.css';

export function Button(data) {
  return (
    <>
      <button
        type="button"
        onClick={data.handleLoadMore}
        className={css.button}
      >
        Load more
      </button>
    </>
  );
}