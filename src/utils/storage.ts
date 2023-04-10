const KEY = "__WN_NOTE__";

export const saveData = (note: string) => new Promise((resolve, reject) => {
  chrome.storage.sync.set({ [KEY]: note })
  .then(() => { resolve(note) })
  .catch((e: Error) => {
    console.error(e);
    reject("");
  });
});

export const getData = () => new Promise((resolve, reject) => {
  chrome.storage.sync.get([ KEY ])
  .then((result) => { resolve(result[KEY]) })
  .catch((e: Error) => {
    console.error(e);
    reject("");
  });
});
