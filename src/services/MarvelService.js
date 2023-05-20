
class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = '96ec5933f6d707a1486bedb820eea608';
  getResorces = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
  }

  getAllCharacters = () => {
    return this.getResorces(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`)
  }

  getCharacter = (id) => {
    return this.getResorces(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)
  }
}

export default MarvelService;