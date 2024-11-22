export interface PokemonResult {
  results: PokeInfos[];
  count: number;
  next?: string;
  previous?: string
}

export interface PokeInfos {
  name: string;
  url: string;
  pokeID: number;
  pokeName: string;
  pokeImg: string;
}

export interface PokeDetails {
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
      showdown: {
        front_default: string;
      }
    }
  }
  name: string;
  height: number;
  types: PokeTypeList[];
  weight: number;
}

export interface PokeTypeList {
  slot: string;
  type: PokeTypeListType;
}

export interface PokeTypeListType {
  name: string;
  url: string;
}


