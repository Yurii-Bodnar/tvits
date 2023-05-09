import { Box, Button } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ setPageParams, pageParams }) => {
  return (
    <Box>
      <Button type="button" onClick={() => setPageParams(pageParams + 1)}>
        {' '}
        Load more
      </Button>
    </Box>
  );
};

export default ButtonLoadMore;
