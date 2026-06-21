import GptSearchField from "./GptSearchField";
import GptSearchRecomendation from "./GptSearchRecomendation";

const GptSearch = () =>{
    return(
     <section className="min-h-screen flex flex-col justify-center">
      <GptSearchField />
      <GptSearchRecomendation />
    </section>
    )
}

export default GptSearch;