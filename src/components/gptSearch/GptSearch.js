import GptSearchField from "./GptSearchField";
import GptSearchRecomendation from "./GptSearchRecomendation";

const GptSearch = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start sm:justify-center px-2 sm:px-4">
      <GptSearchField />
      <GptSearchRecomendation />
    </section>
  );
};

export default GptSearch;
