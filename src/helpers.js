import fs from 'fs';


export function writeResponseToFile(apiResponse) {
  fs.writeFile(
    "./exampleApiResponseBody.json",
    JSON.stringify(apiResponse),
    (err) => {
      if (err) {
        return console.log(err);
      }
  });
}
