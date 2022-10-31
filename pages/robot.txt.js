const Robot = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("");
  res.end();

  return {
    props: {},
  };
};

export default Robot;
