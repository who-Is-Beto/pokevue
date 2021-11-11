type Props = {
  pokemon: string;
};

const PokemonPicture = ({ pokemon }: Props ) => (
  <div class="pokemon-container fade-in">
    {pokemon}
  </div>
);

export default PokemonPicture

