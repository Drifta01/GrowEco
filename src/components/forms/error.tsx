

export const error = async (err: any) => {
  console.error(err);
  return {
    props: {error: err.message},
  };
};
