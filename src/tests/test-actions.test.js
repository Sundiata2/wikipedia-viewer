import test from 'ava';
import * as proxyquire from 'proxyquire';
import { search, receiveResults, RECEIVE_RESULTS,  clearResults, setSelectedResult, clearSelectedResult } from '../actions/search-actions';

//Test receive results
const mockRawResults = [
  "s",
  ["S", "Spain", "Sweden", "Switzerland", "South Africa", "Soviet Union", "Scotland", "South Korea", "Star Wars", "Singapore"],
  ["S (named ess , plural esses) is the 19th letter in…nglish alphabet and the ISO basic Latin alphabet.", "Spain (Spanish: España [esˈpaɲa] ( listen)), offic…slands in the Alboran Sea near the African coast.", "Sweden ( ( listen) SWEE-dən; Swedish: Sverige [ˈsv… ), is a Scandinavian country in Northern Europe.", "Switzerland (), officially the Swiss Confederation…y of Bern is the seat of the federal authorities.", "South Africa, officially the Republic of South Afr… Swaziland; and surrounds the kingdom of Lesotho.", "The Soviet Union (Russian: Сове́тский Сою́з, tr. S…ою́з Сове́тских Социалисти́ческих Респу́блик, tr.", "Scotland (; Scots: [ˈskɔt.lənd]; Scottish Gaelic: …he northern third of the island of Great Britain.", "South Korea, officially the Republic of Korea (abb…tuting the southern part of the Korean Peninsula.", "Star Wars is an American epic space opera media fr…entered on a film series created by George Lucas.", "Singapore ( ( listen), ), officially the Republic … city-state and island country in Southeast Asia."],
  ["https://en.wikipedia.org/wiki/S", "https://en.wikipedia.org/wiki/Spain", "https://en.wikipedia.org/wiki/Sweden", "https://en.wikipedia.org/wiki/Switzerland", "https://en.wikipedia.org/wiki/South_Africa", "https://en.wikipedia.org/wiki/Soviet_Union", "https://en.wikipedia.org/wiki/Scotland", "https://en.wikipedia.org/wiki/South_Korea", "https://en.wikipedia.org/wiki/Star_Wars", "https://en.wikipedia.org/wiki/Singapore"]
];

const expectedParsedResults = [
  {title: "S", description: "S (named ess , plural esses) is the 19th letter in…nglish alphabet and the ISO basic Latin alphabet.", url: "https://en.wikipedia.org/wiki/S"},
  {title: "Spain", description: "Spain (Spanish: España [esˈpaɲa] ( listen)), offic…slands in the Alboran Sea near the African coast.", url: "https://en.wikipedia.org/wiki/Spain"},
  {title: "Sweden", description: "Sweden ( ( listen) SWEE-dən; Swedish: Sverige [ˈsv… ), is a Scandinavian country in Northern Europe.", url: "https://en.wikipedia.org/wiki/Sweden"},
  {title: "Switzerland", description: "Switzerland (), officially the Swiss Confederation…y of Bern is the seat of the federal authorities.", url: "https://en.wikipedia.org/wiki/Switzerland"},
  {title: "South Africa", description: "South Africa, officially the Republic of South Afr… Swaziland; and surrounds the kingdom of Lesotho.", url: "https://en.wikipedia.org/wiki/South_Africa"},
  {title: "Soviet Union", description: "The Soviet Union (Russian: Сове́тский Сою́з, tr. S…ою́з Сове́тских Социалисти́ческих Респу́блик, tr.", url: "https://en.wikipedia.org/wiki/Soviet_Union"},
  {title: "Scotland", description: "Scotland (; Scots: [ˈskɔt.lənd]; Scottish Gaelic: …he northern third of the island of Great Britain.", url: "https://en.wikipedia.org/wiki/Scotland"},
  {title: "South Korea", description: "South Korea, officially the Republic of Korea (abb…tuting the southern part of the Korean Peninsula.", url: "https://en.wikipedia.org/wiki/South_Korea"},
  {title: "Star Wars", description: "Star Wars is an American epic space opera media fr…entered on a film series created by George Lucas.", url: "https://en.wikipedia.org/wiki/Star_Wars"},
  {title: "Singapore", description: "Singapore ( ( listen), ), officially the Republic … city-state and island country in Southeast Asia.", url: "https://en.wikipedia.org/wiki/Singapore"},
];


test('given raw results we parse them properly', (t) => {
  t.deepEqual(receiveResults(mockRawResults), {
    type: RECEIVE_RESULTS,
    results: expectedParsedResults
  });
});


//Test search action
test('')



