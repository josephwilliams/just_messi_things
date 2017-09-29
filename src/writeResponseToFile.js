import fs from 'fs';


export default function writeApiResponseToTextFile(apiResponse) {
  fs.writeFile(
    "./exampleApiResponseBody.json",
    JSON.stringify(apiResponse),
    (err) => {
      if (err) {
        return console.log(err);
      }
  });
}
