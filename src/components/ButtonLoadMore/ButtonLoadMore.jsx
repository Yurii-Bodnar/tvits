const ButtonLoadMore = ({ setPageParams, pageParams }) => {
  return (
    <button type="button" onClick={() => setPageParams(pageParams + 1)}>
      {' '}
      Load more
    </button>
  );
};

export default ButtonLoadMore;
