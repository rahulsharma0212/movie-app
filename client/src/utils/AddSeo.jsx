import { Helmet } from "react-helmet";

const AddSeo = ({
  title = "MrFlix",
  description = "MrFlix is best place to search for your best movies and tv",
}) => {
  return (
    <Helmet>
      <title>{`MrFlix | ${title.toUpperCase()}`}</title>
      <meta name="description" content={description}></meta>
    </Helmet>
  );
};

export default AddSeo;
